import React from 'react';
import { Calendar, Clock, MapPin, Users, Link, Edit, Trash2, ExternalLink } from 'lucide-react';
import { Event } from '../types/Event';

interface EventCardProps {
  event: Event;
  onEdit: (event: Event) => void;
  onDelete: (id: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onEdit, onDelete }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'ongoing':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'completed':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-200 group">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
            {event.name}
          </h3>
          <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={() => onEdit(event)}
              className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
              title="Edit event"
            >
              <Edit className="h-4 w-4" />
            </button>
            <button
              onClick={() => onDelete(event.id)}
              className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
              title="Delete event"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mb-4">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(event.status)}`}>
            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
          </span>
        </div>

        {event.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {event.description}
          </p>
        )}
      </div>

      {/* Details */}
      <div className="px-6 pb-4 space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="h-4 w-4 mr-3 text-gray-400 flex-shrink-0" />
          <span>{formatDate(event.date)}</span>
          <Clock className="h-4 w-4 ml-4 mr-2 text-gray-400 flex-shrink-0" />
          <span>{formatTime(event.time)}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <Users className="h-4 w-4 mr-3 text-gray-400 flex-shrink-0" />
          <span className="truncate">{event.organizer}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="h-4 w-4 mr-3 text-gray-400 flex-shrink-0" />
          <span className="truncate">{event.location}</span>
        </div>

        {event.registrationLink && (
          <div className="flex items-center text-sm">
            <Link className="h-4 w-4 mr-3 text-gray-400 flex-shrink-0" />
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 truncate flex items-center group/link"
            >
              Register Now
              <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;