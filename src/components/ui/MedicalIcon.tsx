import React from 'react';
import { clsx } from 'clsx';
import { 
  Heart, 
  Stethoscope, 
  Shield, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  User,
  FileText,
  Pill,
  Activity,
  Zap,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

export type MedicalIconType = 
  | 'heart' 
  | 'stethoscope' 
  | 'shield' 
  | 'clock' 
  | 'map-pin' 
  | 'phone' 
  | 'mail' 
  | 'calendar'
  | 'user'
  | 'file-text'
  | 'pill'
  | 'activity'
  | 'zap'
  | 'check-circle'
  | 'alert-circle'
  | 'info';

export interface MedicalIconProps extends React.SVGAttributes<SVGElement> {
  type: MedicalIconType;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'current';
}

const iconMap = {
  heart: Heart,
  stethoscope: Stethoscope,
  shield: Shield,
  clock: Clock,
  'map-pin': MapPin,
  phone: Phone,
  mail: Mail,
  calendar: Calendar,
  user: User,
  'file-text': FileText,
  pill: Pill,
  activity: Activity,
  zap: Zap,
  'check-circle': CheckCircle,
  'alert-circle': AlertCircle,
  info: Info,
};

const MedicalIcon = React.forwardRef<SVGSVGElement, MedicalIconProps>(
  ({ type, size = 'md', color = 'primary', className, ...props }, ref) => {
    const IconComponent = iconMap[type];
    
    if (!IconComponent) {
      console.warn(`MedicalIcon: Icon type "${type}" not found`);
      return null;
    }

    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-12 h-12',
    };

    const colorClasses = {
      primary: 'text-primary',
      secondary: 'text-secondary',
      success: 'text-green-600',
      warning: 'text-yellow-600',
      danger: 'text-red-600',
      info: 'text-blue-600',
      current: 'text-current',
    };

    return (
      <IconComponent
        className={clsx(
          sizeClasses[size],
          colorClasses[color],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

MedicalIcon.displayName = 'MedicalIcon';

export default MedicalIcon;