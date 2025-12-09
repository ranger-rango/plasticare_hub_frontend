import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { Appointment } from '../types';

interface AppointmentSchedulerProps {
  appointments: Appointment[];
  onScheduleAppointment: (type: string, date: Date, time: string) => void;
}

const AppointmentScheduler = ({ appointments, onScheduleAppointment }: AppointmentSchedulerProps) => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const appointmentTypes = [
    { value: 'follow-up', label: 'Follow-up Consultation' },
    { value: 'check-up', label: 'Post-Procedure Check-up' },
    { value: 'dressing', label: 'Dressing Change' },
    { value: 'suture', label: 'Suture Removal' },
    { value: 'assessment', label: 'Recovery Assessment' }
  ];

  const timeSlots = [
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' }
  ];

  const handleSchedule = () => {
    if (selectedType && selectedDate && selectedTime) {
      onScheduleAppointment(selectedType, new Date(selectedDate), selectedTime);
      setSelectedType('');
      setSelectedDate('');
      setSelectedTime('');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-primary/10 text-primary';
      case 'completed': return 'bg-success/10 text-success';
      case 'cancelled': return 'bg-error/10 text-error';
      default: return 'bg-muted text-text-secondary';
    }
  };

  const upcomingAppointments = appointments
    .filter(apt => apt.status === 'scheduled' && apt.date >= new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <div className="space-y-6">
      <div className="bg-gradient-rose-overlay rounded-xl p-6 border border-primary/20">
        <h3 className="font-headline text-2xl font-semibold text-text-primary mb-6">
          Schedule New Appointment
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Select
            label="Appointment Type"
            options={appointmentTypes}
            value={selectedType}
            onChange={setSelectedType}
            placeholder="Select type"
          />

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Date
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <Select
            label="Time Slot"
            options={timeSlots}
            value={selectedTime}
            onChange={setSelectedTime}
            placeholder="Select time"
          />
        </div>

        <Button
          variant="default"
          size="lg"
          fullWidth
          iconName="Calendar"
          iconPosition="left"
          onClick={handleSchedule}
          disabled={!selectedType || !selectedDate || !selectedTime}
        >
          Schedule Appointment
        </Button>
      </div>

      <div>
        <h3 className="font-headline text-2xl font-semibold text-text-primary mb-4">
          Upcoming Appointments
        </h3>

        {upcomingAppointments.length > 0 ? (
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-soft transition-brand"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name="Calendar" size={24} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h4 className="font-headline text-lg font-semibold text-text-primary mb-1">
                        {appointment.type}
                      </h4>
                      <p className="text-text-secondary text-sm">
                        with {appointment.doctor}
                      </p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                    {appointment.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center text-text-secondary">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    {appointment.date.toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-text-secondary">
                    <Icon name="Clock" size={16} className="mr-2" />
                    {appointment.time}
                  </div>
                  <div className="flex items-center text-text-secondary">
                    <Icon name="MapPin" size={16} className="mr-2" />
                    {appointment.location}
                  </div>
                </div>

                {appointment.notes && (
                  <div className="mt-4 p-3 bg-surface rounded-lg">
                    <p className="text-sm text-text-secondary">
                      <span className="font-medium text-text-primary">Notes: </span>
                      {appointment.notes}
                    </p>
                  </div>
                )}

                <div className="mt-4 flex items-center space-x-3">
                  <Button variant="outline" size="sm" iconName="Calendar" iconPosition="left">
                    Reschedule
                  </Button>
                  <Button variant="ghost" size="sm" iconName="X" iconPosition="left">
                    Cancel
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-surface rounded-xl">
            <Icon name="Calendar" size={48} color="var(--color-text-secondary)" className="mx-auto mb-4" />
            <p className="text-text-secondary">No upcoming appointments scheduled</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentScheduler;