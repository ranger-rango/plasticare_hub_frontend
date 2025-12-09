import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Message } from '../types';

interface MessageCenterProps {
  messages: Message[];
  onSendMessage: (content: string) => void;
}

const MessageCenter = ({ messages, onSendMessage }: MessageCenterProps) => {
  const [newMessage, setNewMessage] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'unread'>('all');

  const filteredMessages = selectedFilter === 'unread' 
    ? messages.filter(msg => !msg.read)
    : messages;

  const handleSend = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'doctor': return 'text-primary';
      case 'nurse': return 'text-accent';
      default: return 'text-text-secondary';
    }
  };

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden flex flex-col h-[600px]">
      <div className="p-6 border-b border-border bg-gradient-rose-overlay">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-headline text-2xl font-semibold text-text-primary">
            Secure Messages
          </h3>
          <div className="flex items-center space-x-2">
            <Button
              variant={selectedFilter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter('all')}
            >
              All
            </Button>
            <Button
              variant={selectedFilter === 'unread' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter('unread')}
            >
              Unread ({messages.filter(m => !m.read).length})
            </Button>
          </div>
        </div>
        <p className="text-text-secondary text-sm flex items-center">
          <Icon name="Lock" size={16} className="mr-2" />
          End-to-end encrypted communication with your care team
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {filteredMessages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start space-x-3 p-4 rounded-lg transition-brand ${
              !message.read ? 'bg-primary/5 border border-primary/20' : 'hover:bg-surface'
            }`}
          >
            <div className="relative">
              <Image
                src={message.avatar}
                alt={message.alt}
                className="w-12 h-12 rounded-full object-cover"
              />
              {!message.read && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-background" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-text-primary">
                    {message.sender}
                  </span>
                  <span className={`text-xs font-medium ${getRoleColor(message.senderRole)}`}>
                    {message.senderRole.charAt(0).toUpperCase() + message.senderRole.slice(1)}
                  </span>
                </div>
                <span className="text-xs text-text-secondary">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="text-text-secondary text-sm">
                {message.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 border-t border-border bg-surface">
        <div className="flex items-end space-x-3">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
          </div>
          <Button
            variant="default"
            size="default"
            iconName="Send"
            iconPosition="right"
            onClick={handleSend}
            disabled={!newMessage.trim()}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MessageCenter;