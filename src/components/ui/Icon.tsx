import React from 'react';
import { Clock, FileCheck, BookOpen, Calendar, MessageCircle } from 'lucide-react';

interface IconProps {
  name: 'clock' | 'filecheck' | 'bookopen' | 'calendar' | 'messagecircle';
  size?: number;
}

const IconComponent: React.FC<IconProps> = ({ name, size = 20 }) => {
  const IconMap = {
    clock: Clock,
    filecheck: FileCheck,
    bookopen: BookOpen,
    calendar: Calendar,
    messagecircle: MessageCircle,
  };

  const Icon = IconMap[name];
  
  return <Icon size={size} />;
};

export default IconComponent;
