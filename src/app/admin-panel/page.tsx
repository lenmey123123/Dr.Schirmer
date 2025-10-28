'use client';

import React, { useState, useEffect } from 'react';
import { Bell, Calendar, Heart, Shield, Save, Eye, EyeOff, Lock, User, AlertCircle, CheckCircle } from 'lucide-react';

interface AlertSettings {
  isVisible: boolean;
  text: string;
  lastUpdated: string;
}

interface NewsPost {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string;
  color: string;
  published: boolean;
}

const AdminPanel: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [alertSettings, setAlertSettings] = useState<AlertSettings>({
    isVisible: true,
    text: '',
    lastUpdated: ''
  });
  
  const [newsPosts, setNewsPosts] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | 'info'>('info');

  // Admin credentials - in production, use environment variables
  const ADMIN_PASSWORD = 'DrSchirmer2025!';
  const ADMIN_KEY = 'admin_authenticated';

  useEffect(() => {
    // Check if already authenticated
    const isAuth = localStorage.getItem(ADMIN_KEY) === 'true';
    setIsAuthenticated(isAuth);
    
    if (isAuth) {
      loadData();
    } else {
      setLoading(false);
    }
  }, []);

  const authenticate = () => {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem(ADMIN_KEY, 'true');
      setIsAuthenticated(true);
      loadData();
      showMessage('Erfolgreich angemeldet!', 'success');
    } else {
      showMessage('Falsches Passwort!', 'error');
      setPassword('');
    }
  };

  const logout = () => {
    localStorage.removeItem(ADMIN_KEY);
    setIsAuthenticated(false);
    setPassword('');
    showMessage('Erfolgreich abgemeldet!', 'info');
  };

  const showMessage = (text: string, type: 'success' | 'error' | 'info') => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => setMessage(''), 4000);
  };

  const loadData = async () => {
    try {
      // Load alert settings
      const alertData = await import('@/data/alert-settings.json');
      const alertSettings = alertData.default || alertData;
      setAlertSettings(alertSettings as AlertSettings);

      // Load news posts
      const newsData = await import('@/data/news-posts.json');
      const data = newsData.default || newsData;
      
      let posts: NewsPost[] = [];
      if (Array.isArray(data)) {
        posts = data as NewsPost[];
      } else if (data && typeof data === 'object' && 'posts' in data) {
        posts = (data as { posts: NewsPost[] }).posts;
      }
      
      setNewsPosts(posts);
    } catch (error) {
      console.error('Error loading data:', error);
      showMessage('Fehler beim Laden der Daten!', 'error');
    } finally {
      setLoading(false);
    }
  };

  const saveAlertSettings = async () => {
    setSaving(true);
    try {
      const updatedSettings = {
        ...alertSettings,
        lastUpdated: new Date().toISOString()
      };

      // Save to localStorage for immediate effect
      localStorage.setItem('alertSettings', JSON.stringify(updatedSettings));
      
      // Trigger custom event for components to reload
      window.dispatchEvent(new CustomEvent('alertSettingsUpdated', { 
        detail: updatedSettings 
      }));

      setAlertSettings(updatedSettings);
      showMessage('Alert-Einstellungen gespeichert!', 'success');
    } catch (error) {
      showMessage('Fehler beim Speichern!', 'error');
    } finally {
      setSaving(false);
    }
  };

  const saveNewsPosts = async () => {
    setSaving(true);
    try {
      // Save to localStorage for immediate effect
      localStorage.setItem('newsPosts', JSON.stringify(newsPosts));
      
      // Trigger custom event for components to reload
      window.dispatchEvent(new CustomEvent('newsPostsUpdated', { 
        detail: newsPosts 
      }));

      showMessage('News-Posts gespeichert!', 'success');
    } catch (error) {
      showMessage('Fehler beim Speichern!', 'error');
    } finally {
      setSaving(false);
    }
  };

  const addNewsPost = () => {
    const newPost: NewsPost = {
      id: Date.now().toString(),
      title: 'Neue Meldung',
      description: 'Beschreibung eingeben...',
      date: new Date().toISOString(),
      icon: 'calendar',
      color: 'yellow',
      published: true
    };
    setNewsPosts([...newsPosts, newPost]);
  };

  const updateNewsPost = (index: number, field: keyof NewsPost, value: any) => {
    const updated = [...newsPosts];
    const currentPost = updated[index];
    updated[index] = { 
      ...currentPost, 
      [field]: value 
    } as NewsPost;
    setNewsPosts(updated);
  };

  const deleteNewsPost = (index: number) => {
    setNewsPosts(newsPosts.filter((_, i) => i !== index));
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Panel</h1>
            <p className="text-gray-600">Dr. Schirmer Website</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Passwort
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && authenticate()}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                  placeholder="Passwort eingeben..."
                />
                <Lock className="absolute right-3 top-3.5 w-4 h-4 text-gray-400" />
              </div>
            </div>

            <button
              onClick={authenticate}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
            >
              <User className="w-4 h-4 mr-2" />
              Anmelden
            </button>
          </div>

          {message && (
            <div className={`mt-4 p-3 rounded-lg flex items-center ${
              messageType === 'error' ? 'bg-red-100 text-red-700' :
              messageType === 'success' ? 'bg-green-100 text-green-700' :
              'bg-blue-100 text-blue-700'
            }`}>
              {messageType === 'error' ? <AlertCircle className="w-4 h-4 mr-2" /> :
               messageType === 'success' ? <CheckCircle className="w-4 h-4 mr-2" /> :
               <AlertCircle className="w-4 h-4 mr-2" />}
              {message}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Lade Admin-Panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Dr. Schirmer Admin</h1>
                <p className="text-sm text-gray-600">Website Content Management</p>
              </div>
            </div>
            <button
              onClick={logout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center"
            >
              <Lock className="w-4 h-4 mr-2" />
              Abmelden
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {message && (
          <div className={`mb-6 p-4 rounded-lg flex items-center ${
            messageType === 'error' ? 'bg-red-100 text-red-700 border border-red-200' :
            messageType === 'success' ? 'bg-green-100 text-green-700 border border-green-200' :
            'bg-blue-100 text-blue-700 border border-blue-200'
          }`}>
            {messageType === 'error' ? <AlertCircle className="w-5 h-5 mr-3" /> :
             messageType === 'success' ? <CheckCircle className="w-5 h-5 mr-3" /> :
             <AlertCircle className="w-5 h-5 mr-3" />}
            {message}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Alert Settings */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <Bell className="w-6 h-6 mr-2 text-yellow-600" />
              Alertleiste
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sichtbarkeit
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() => setAlertSettings({...alertSettings, isVisible: !alertSettings.isVisible})}
                    className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                      alertSettings.isVisible 
                        ? 'bg-green-100 text-green-800 border border-green-200' 
                        : 'bg-gray-100 text-gray-600 border border-gray-200'
                    }`}
                  >
                    {alertSettings.isVisible ? <Eye className="w-4 h-4 mr-2" /> : <EyeOff className="w-4 h-4 mr-2" />}
                    {alertSettings.isVisible ? 'Sichtbar' : 'Versteckt'}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Text
                </label>
                <textarea
                  value={alertSettings.text}
                  onChange={(e) => setAlertSettings({...alertSettings, text: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="Alert-Text eingeben..."
                />
              </div>

              <button
                onClick={saveAlertSettings}
                disabled={saving}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center font-medium"
              >
                <Save className="w-4 h-4 mr-2" />
                {saving ? 'Speichere...' : 'Alert speichern'}
              </button>
            </div>
          </div>

          {/* News Posts */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-blue-600" />
                Aktuelle Meldungen
              </h2>
              <button
                onClick={addNewsPost}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Neue Meldung
              </button>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {newsPosts.map((post, index) => (
                <div key={post.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Titel
                      </label>
                      <input
                        type="text"
                        value={post.title}
                        onChange={(e) => updateNewsPost(index, 'title', e.target.value)}
                        className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Icon
                      </label>
                      <select
                        value={post.icon}
                        onChange={(e) => updateNewsPost(index, 'icon', e.target.value)}
                        className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="calendar">Kalender</option>
                        <option value="heart">Herz</option>
                        <option value="shield">Schild</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Farbe
                      </label>
                      <select
                        value={post.color}
                        onChange={(e) => updateNewsPost(index, 'color', e.target.value)}
                        className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="yellow">Gelb</option>
                        <option value="red">Rot</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={post.published}
                          onChange={(e) => updateNewsPost(index, 'published', e.target.checked)}
                          className="mr-2"
                        />
                        <label className="text-xs font-medium text-gray-700">
                          Veröffentlicht
                        </label>
                      </div>
                      <button
                        onClick={() => deleteNewsPost(index)}
                        className="text-red-600 hover:text-red-800 text-xs"
                      >
                        Löschen
                      </button>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Beschreibung
                      </label>
                      <textarea
                        value={post.description}
                        onChange={(e) => updateNewsPost(index, 'description', e.target.value)}
                        className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                        rows={2}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={saveNewsPosts}
              disabled={saving}
              className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center font-medium"
            >
              <Save className="w-4 h-4 mr-2" />
              {saving ? 'Speichere...' : 'Alle News speichern'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;