import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import CareStageCard from './components/CareStageCard';
import RecoveryTimeline from './components/RecoveryTimeline';
import MessageCenter from './components/MessageCenter';
import VideoLibrary from './components/VideoLibrary';
import AppointmentScheduler from './components/AppointmentScheduler';
import HealthMetrics from './components/HealthMetrics';
import SupportResources from './components/SupportResources';
import {
  CareStage,
  RecoveryMilestone,
  Message,
  EducationalVideo,
  Appointment,
  HealthMetric,
  SupportResource } from
'./types';

const PatientCare = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'timeline' | 'messages' | 'videos' | 'appointments' | 'support'>('overview');

  const [careStages, setCareStages] = useState<CareStage[]>([
  {
    id: '1',
    title: 'Pre-Procedure Preparation',
    description: 'Essential steps to prepare for your procedure and ensure optimal results',
    icon: 'ClipboardList',
    duration: '1-2 weeks before',
    tasks: [
    {
      id: '1-1',
      title: 'Complete Pre-Operative Assessment',
      description: 'Schedule and attend your pre-operative health assessment with our medical team',
      completed: true
    },
    {
      id: '1-2',
      title: 'Review Medication Guidelines',
      description: 'Stop taking blood thinners and certain supplements as instructed',
      completed: true
    },
    {
      id: '1-3',
      title: 'Arrange Transportation',
      description: 'Confirm someone will drive you home after the procedure',
      completed: false,
      dueDate: new Date(Date.now() + 86400000 * 3)
    },
    {
      id: '1-4',
      title: 'Prepare Recovery Space',
      description: 'Set up a comfortable recovery area at home with necessary supplies',
      completed: false,
      dueDate: new Date(Date.now() + 86400000 * 5)
    }]

  },
  {
    id: '2',
    title: 'Procedure Day',
    description: 'What to expect on the day of your procedure',
    icon: 'Activity',
    duration: 'Day 0',
    tasks: [
    {
      id: '2-1',
      title: 'Arrive at Scheduled Time',
      description: 'Arrive 30 minutes before your scheduled procedure time',
      completed: false
    },
    {
      id: '2-2',
      title: 'Final Consultation',
      description: 'Meet with your surgeon for final questions and consent',
      completed: false
    },
    {
      id: '2-3',
      title: 'Post-Procedure Instructions',
      description: 'Receive detailed aftercare instructions from nursing staff',
      completed: false
    }]

  },
  {
    id: '3',
    title: 'Immediate Recovery',
    description: 'First 48 hours post-procedure care and monitoring',
    icon: 'Heart',
    duration: 'Days 1-2',
    tasks: [
    {
      id: '3-1',
      title: 'Rest and Hydration',
      description: 'Get plenty of rest and stay well-hydrated',
      completed: false
    },
    {
      id: '3-2',
      title: 'Take Prescribed Medications',
      description: 'Follow medication schedule exactly as prescribed',
      completed: false
    },
    {
      id: '3-3',
      title: 'Monitor Surgical Site',
      description: 'Check for any signs of infection or complications',
      completed: false
    },
    {
      id: '3-4',
      title: 'Attend Follow-up Call',
      description: 'Participate in scheduled check-in call with nursing staff',
      completed: false
    }]

  },
  {
    id: '4',
    title: 'Active Recovery',
    description: 'Gradual return to normal activities with continued care',
    icon: 'TrendingUp',
    duration: 'Weeks 1-4',
    tasks: [
    {
      id: '4-1',
      title: 'Attend Follow-up Appointments',
      description: 'Keep all scheduled post-operative check-ups',
      completed: false
    },
    {
      id: '4-2',
      title: 'Gentle Activity',
      description: 'Begin light walking and approved exercises',
      completed: false
    },
    {
      id: '4-3',
      title: 'Wound Care',
      description: 'Continue proper wound care and dressing changes',
      completed: false
    },
    {
      id: '4-4',
      title: 'Document Progress',
      description: 'Take photos and note any changes or concerns',
      completed: false
    }]

  },
  {
    id: '5',
    title: 'Long-term Care',
    description: 'Maintaining results and ongoing wellness',
    icon: 'Shield',
    duration: 'Months 1-6',
    tasks: [
    {
      id: '5-1',
      title: 'Regular Check-ups',
      description: 'Attend scheduled long-term follow-up appointments',
      completed: false
    },
    {
      id: '5-2',
      title: 'Scar Management',
      description: 'Follow scar care protocol for optimal healing',
      completed: false
    },
    {
      id: '5-3',
      title: 'Lifestyle Maintenance',
      description: 'Maintain healthy habits to preserve results',
      completed: false
    }]

  }]
  );

  const recoveryMilestones: RecoveryMilestone[] = [
  {
    id: '1',
    day: 1,
    title: 'Immediate Post-Op',
    description: 'Rest is crucial. You may experience swelling, bruising, and discomfort.',
    status: 'completed',
    activities: [
    'Rest in elevated position',
    'Apply cold compresses as directed',
    'Take pain medication as prescribed',
    'Stay hydrated with clear fluids',
    'Have someone stay with you for 24 hours']

  },
  {
    id: '2',
    day: 3,
    title: 'Early Recovery',
    description: 'Swelling peaks around day 2-3. Continue rest and follow care instructions.',
    status: 'current',
    activities: [
    'Continue elevation and cold therapy',
    'Begin gentle walking around the house',
    'Keep surgical site clean and dry',
    'Attend virtual check-in with care team',
    'Monitor for any signs of complications']

  },
  {
    id: '3',
    day: 7,
    title: 'First Week Complete',
    description: 'Most acute symptoms should be improving. First in-person follow-up.',
    status: 'upcoming',
    activities: [
    'Attend first post-op appointment',
    'Possible suture or drain removal',
    'Transition to lighter dressings',
    'Gradually increase activity level',
    'Begin scar care routine if approved']

  },
  {
    id: '4',
    day: 14,
    title: 'Two Week Milestone',
    description: 'Significant improvement in swelling and bruising. Return to light activities.',
    status: 'upcoming',
    activities: [
    'Resume light work activities if approved',
    'Continue wound care protocol',
    'Start gentle stretching exercises',
    'Maintain healthy diet and hydration',
    'Document healing progress with photos']

  },
  {
    id: '5',
    day: 30,
    title: 'One Month Progress',
    description: 'Major healing complete. Results becoming more visible.',
    status: 'upcoming',
    activities: [
    'Comprehensive progress evaluation',
    'Discuss return to normal activities',
    'Review long-term care plan',
    'Address any remaining concerns',
    'Plan for 3-month follow-up']

  }];


  const [messages, setMessages] = useState<Message[]>([
  {
    id: '1',
    sender: 'Dr. Sarah Mitchell',
    senderRole: 'doctor',
    content: 'Your recovery is progressing excellently. The swelling has reduced significantly, and the incision sites are healing perfectly. Continue with your current care routine.',
    timestamp: new Date(Date.now() - 3600000),
    read: false,
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_10f32ae74-1764872614047.png",
    alt: 'Professional female doctor in white coat with stethoscope smiling at camera in modern medical office'
  },
  {
    id: '2',
    sender: 'Nurse Jennifer Adams',
    senderRole: 'nurse',
    content: 'Reminder: Please take your prescribed antibiotics with food. Your next dressing change is scheduled for tomorrow at 10 AM. Let us know if you need to reschedule.',
    timestamp: new Date(Date.now() - 7200000),
    read: false,
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_17dd65cbc-1764831931015.png",
    alt: 'Caring nurse in blue scrubs with clipboard standing in hospital corridor with warm smile'
  },
  {
    id: '3',
    sender: 'Dr. Sarah Mitchell',
    senderRole: 'doctor',
    content: 'I reviewed your latest photos. Everything looks great! You can start incorporating light exercises as we discussed. Remember to listen to your body and don\'t push too hard.',
    timestamp: new Date(Date.now() - 86400000),
    read: true,
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_10f32ae74-1764872614047.png",
    alt: 'Professional female doctor in white coat with stethoscope smiling at camera in modern medical office'
  },
  {
    id: '4',
    sender: 'Care Coordinator Lisa Brown',
    senderRole: 'nurse',
    content: 'Your insurance has approved the follow-up appointments. I\'ve scheduled your next three visits. Check your patient portal for the complete schedule.',
    timestamp: new Date(Date.now() - 172800000),
    read: true,
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_11dd292e2-1764667687408.png",
    alt: 'Friendly care coordinator in professional attire with tablet in hand at reception desk'
  }]
  );

  const educationalVideos: EducationalVideo[] = [
  {
    id: '1',
    title: 'Post-Operative Wound Care Basics',
    description: 'Learn proper techniques for cleaning and dressing your surgical site to prevent infection and promote healing.',
    duration: '8:45',
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_172e9a032-1764691797364.png",
    alt: 'Medical professional demonstrating proper wound care technique with sterile gloves and medical supplies on clean white surface',
    category: 'wound-care',
    views: 1247,
    url: '#'
  },
  {
    id: '2',
    title: 'Managing Swelling and Bruising',
    description: 'Effective strategies to reduce post-surgical swelling and bruising using elevation, cold therapy, and proper rest.',
    duration: '6:30',
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_178396504-1764691795137.png",
    alt: 'Patient resting comfortably with elevated legs and ice pack demonstrating proper swelling management technique',
    category: 'recovery',
    views: 892,
    url: '#'
  },
  {
    id: '3',
    title: 'Scar Management Techniques',
    description: 'Comprehensive guide to minimizing scar appearance through massage, silicone sheets, and proper sun protection.',
    duration: '10:15',
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1726e0860-1764661115744.png",
    alt: 'Close-up of hands applying scar treatment cream with gentle massage technique on healing surgical scar',
    category: 'scar-care',
    views: 1563,
    url: '#'
  },
  {
    id: '4',
    title: 'Safe Exercise After Surgery',
    description: 'When and how to safely resume physical activity, including approved exercises for each recovery stage.',
    duration: '12:20',
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1999dbf48-1764781033674.png",
    alt: 'Woman in comfortable workout clothes performing gentle stretching exercises on yoga mat in bright home setting',
    category: 'exercise',
    views: 2104,
    url: '#'
  },
  {
    id: '5',
    title: 'Nutrition for Optimal Healing',
    description: 'Essential nutrients and dietary guidelines to support your body\'s healing process and boost recovery.',
    duration: '9:40',
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_16360c9b6-1764661114656.png",
    alt: 'Colorful array of fresh fruits, vegetables, and healthy foods arranged on wooden table promoting healing nutrition',
    category: 'nutrition',
    views: 1876,
    url: '#'
  },
  {
    id: '6',
    title: 'Pain Management Strategies',
    description: 'Safe and effective methods to manage post-operative pain, including medication schedules and alternative therapies.',
    duration: '7:55',
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1f04b0e7c-1764637212459.png",
    alt: 'Peaceful patient receiving gentle therapeutic massage for pain relief in calm spa-like medical setting',
    category: 'pain-management',
    views: 1432,
    url: '#'
  }];


  const [appointments, setAppointments] = useState<Appointment[]>([
  {
    id: '1',
    type: 'Post-Procedure Check-up',
    date: new Date(Date.now() + 86400000 * 2),
    time: '10:00 AM',
    doctor: 'Dr. Sarah Mitchell',
    location: 'Main Clinic - Room 203',
    status: 'scheduled',
    notes: 'Bring your medication list and any questions you may have'
  },
  {
    id: '2',
    type: 'Suture Removal',
    date: new Date(Date.now() + 86400000 * 7),
    time: '2:30 PM',
    doctor: 'Nurse Jennifer Adams',
    location: 'Main Clinic - Treatment Room 1',
    status: 'scheduled'
  },
  {
    id: '3',
    type: 'Follow-up Consultation',
    date: new Date(Date.now() + 86400000 * 30),
    time: '11:00 AM',
    doctor: 'Dr. Sarah Mitchell',
    location: 'Main Clinic - Room 203',
    status: 'scheduled',
    notes: 'One-month progress evaluation and photos'
  }]
  );

  const healthMetrics: HealthMetric[] = [
  {
    id: '1',
    name: 'Heart Rate',
    value: 72,
    unit: 'bpm',
    status: 'normal',
    lastUpdated: new Date(Date.now() - 1800000),
    trend: 'stable'
  },
  {
    id: '2',
    name: 'Blood Pressure',
    value: 118,
    unit: 'mmHg',
    status: 'normal',
    lastUpdated: new Date(Date.now() - 3600000),
    trend: 'down'
  },
  {
    id: '3',
    name: 'Temperature',
    value: 98.4,
    unit: '°F',
    status: 'normal',
    lastUpdated: new Date(Date.now() - 7200000),
    trend: 'stable'
  },
  {
    id: '4',
    name: 'Pain Level',
    value: 2,
    unit: '/10',
    status: 'normal',
    lastUpdated: new Date(Date.now() - 900000),
    trend: 'down'
  }];


  const supportResources: SupportResource[] = [
  {
    id: '1',
    title: 'Recovery Support Forum',
    description: 'Connect with other patients going through similar procedures and share experiences',
    type: 'forum',
    icon: 'MessageSquare',
    link: '#',
    participants: 1247
  },
  {
    id: '2',
    title: 'Weekly Support Group',
    description: 'Join our virtual support group meetings every Tuesday at 6 PM',
    type: 'group',
    icon: 'Users',
    link: '#',
    participants: 32
  },
  {
    id: '3',
    title: 'Recovery Guide Library',
    description: 'Comprehensive articles covering all aspects of post-procedure care',
    type: 'article',
    icon: 'BookOpen',
    link: '#'
  },
  {
    id: '4',
    title: 'Meditation & Wellness',
    description: 'Guided meditation and relaxation videos to support mental well-being',
    type: 'video',
    icon: 'Heart',
    link: '#'
  },
  {
    id: '5',
    title: 'Nutrition Counseling',
    description: 'One-on-one sessions with our nutritionist to optimize your recovery diet',
    type: 'group',
    icon: 'Apple',
    link: '#'
  },
  {
    id: '6',
    title: 'Family Support Resources',
    description: 'Information and guidance for family members supporting your recovery',
    type: 'article',
    icon: 'Heart',
    link: '#'
  }];


  const handleTaskToggle = (stageId: string, taskId: string) => {
    setCareStages((stages) =>
    stages.map((stage) =>
    stage.id === stageId ?
    {
      ...stage,
      tasks: stage.tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    } :
    stage
    )
    );
  };

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: String(messages.length + 1),
      sender: 'You',
      senderRole: 'patient',
      content,
      timestamp: new Date(),
      read: true,
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_148a16c93-1763301595276.png",
      alt: 'Patient profile photo showing friendly person in casual attire with warm smile'
    };
    setMessages([newMessage, ...messages]);
  };

  const handleScheduleAppointment = (type: string, date: Date, time: string) => {
    const newAppointment: Appointment = {
      id: String(appointments.length + 1),
      type,
      date,
      time,
      doctor: 'Dr. Sarah Mitchell',
      location: 'Main Clinic - Room 203',
      status: 'scheduled'
    };
    setAppointments([...appointments, newAppointment]);
  };

  const tabs = [
  { id: 'overview', label: 'Care Overview', icon: 'LayoutDashboard' },
  { id: 'timeline', label: 'Recovery Timeline', icon: 'Calendar' },
  { id: 'messages', label: 'Messages', icon: 'MessageSquare' },
  { id: 'videos', label: 'Video Library', icon: 'Video' },
  { id: 'appointments', label: 'Appointments', icon: 'Clock' },
  { id: 'support', label: 'Support', icon: 'Heart' }];


  return (
    <>
      <Helmet>
        <title>Patient Care - MedBeauty Clinic</title>
        <meta name="description" content="Comprehensive patient care resources, recovery guidance, and support throughout your transformation journey at MedBeauty Clinic." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          <section className="relative py-16 bg-gradient-rose-overlay">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                  Your Complete Care Journey
                </h1>
                <p className="text-lg md:text-xl text-text-secondary mb-8">
                  Comprehensive support and guidance through every step of your transformation, from preparation to full recovery
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Phone"
                    iconPosition="left"
                    className="shadow-brand">

                    24/7 Care Support
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Download"
                    iconPosition="left">

                    Download Care Guide
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 border-b border-border bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-headline text-2xl font-semibold text-text-primary">
                  Health Monitoring
                </h2>
                <Button variant="ghost" size="sm" iconName="RefreshCw" iconPosition="left">
                  Sync Device
                </Button>
              </div>
              <HealthMetrics metrics={healthMetrics} />
            </div>
          </section>

          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
                {tabs.map((tab) =>
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? 'default' : 'outline'}
                  size="default"
                  iconName={tab.icon}
                  iconPosition="left"
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}>

                    {tab.label}
                  </Button>
                )}
              </div>

              {activeTab === 'overview' &&
              <div className="space-y-6">
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary rounded-lg">
                        <Icon name="Info" size={24} color="white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-headline text-xl font-semibold text-text-primary mb-2">
                          Welcome to Your Care Portal
                        </h3>
                        <p className="text-text-secondary mb-4">
                          This secure portal provides everything you need for a successful recovery. Track your progress, communicate with your care team, access educational resources, and manage appointments all in one place.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center text-text-secondary">
                            <Icon name="Shield" size={16} className="mr-2 text-primary" />
                            HIPAA Compliant
                          </div>
                          <div className="flex items-center text-text-secondary">
                            <Icon name="Lock" size={16} className="mr-2 text-primary" />
                            End-to-End Encrypted
                          </div>
                          <div className="flex items-center text-text-secondary">
                            <Icon name="Clock" size={16} className="mr-2 text-primary" />
                            24/7 Access
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="font-headline text-3xl font-semibold text-text-primary mb-6">
                      Your Care Stages
                    </h2>
                    <div className="space-y-4">
                      {careStages.map((stage, index) =>
                    <CareStageCard
                      key={stage.id}
                      stage={stage}
                      isActive={index === 1}
                      onTaskToggle={handleTaskToggle} />

                    )}
                    </div>
                  </div>
                </div>
              }

              {activeTab === 'timeline' &&
              <div>
                  <div className="mb-8">
                    <h2 className="font-headline text-3xl font-semibold text-text-primary mb-4">
                      Recovery Timeline
                    </h2>
                    <p className="text-text-secondary max-w-3xl">
                      Track your recovery progress through key milestones. Each milestone includes specific activities and guidelines to ensure optimal healing.
                    </p>
                  </div>
                  <RecoveryTimeline milestones={recoveryMilestones} />
                </div>
              }

              {activeTab === 'messages' &&
              <div>
                  <div className="mb-8">
                    <h2 className="font-headline text-3xl font-semibold text-text-primary mb-4">
                      Secure Messaging
                    </h2>
                    <p className="text-text-secondary max-w-3xl">
                      Communicate directly with your care team through our encrypted messaging system. Response time is typically within 4 hours during business hours.
                    </p>
                  </div>
                  <MessageCenter messages={messages} onSendMessage={handleSendMessage} />
                </div>
              }

              {activeTab === 'videos' &&
              <div>
                  <div className="mb-8">
                    <h2 className="font-headline text-3xl font-semibold text-text-primary mb-4">
                      Educational Video Library
                    </h2>
                    <p className="text-text-secondary max-w-3xl">
                      Access our comprehensive library of instructional videos covering all aspects of post-procedure care and recovery.
                    </p>
                  </div>
                  <VideoLibrary videos={educationalVideos} />
                </div>
              }

              {activeTab === 'appointments' &&
              <div>
                  <div className="mb-8">
                    <h2 className="font-headline text-3xl font-semibold text-text-primary mb-4">
                      Appointment Management
                    </h2>
                    <p className="text-text-secondary max-w-3xl">
                      Schedule and manage your follow-up appointments. Automated reminders will be sent 24 hours before each appointment.
                    </p>
                  </div>
                  <AppointmentScheduler
                  appointments={appointments}
                  onScheduleAppointment={handleScheduleAppointment} />

                </div>
              }

              {activeTab === 'support' &&
              <div>
                  <div className="mb-8">
                    <h2 className="font-headline text-3xl font-semibold text-text-primary mb-4">
                      Support Resources
                    </h2>
                    <p className="text-text-secondary max-w-3xl">
                      Connect with our community, access support groups, and find additional resources to support your recovery journey.
                    </p>
                  </div>
                  <SupportResources resources={supportResources} />
                </div>
              }
            </div>
          </section>

          <section className="py-16 bg-gradient-rose-overlay">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-card rounded-2xl p-8 md:p-12 border border-primary/20 shadow-brand">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-text-primary mb-4">
                      Need Immediate Assistance?
                    </h2>
                    <p className="text-text-secondary text-lg mb-6">
                      Our care team is available 24/7 to address any concerns or questions you may have during your recovery.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon name="Phone" size={20} color="var(--color-primary)" />
                        </div>
                        <div>
                          <p className="text-sm text-text-secondary">Emergency Hotline</p>
                          <p className="font-semibold text-text-primary">1-800-MEDCARE</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon name="Mail" size={20} color="var(--color-primary)" />
                        </div>
                        <div>
                          <p className="text-sm text-text-secondary">Email Support</p>
                          <p className="font-semibold text-text-primary">care@medbeauty.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <Button
                      variant="default"
                      size="lg"
                      fullWidth
                      iconName="Phone"
                      iconPosition="left"
                      className="shadow-brand">

                      Call Care Team
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      fullWidth
                      iconName="MessageSquare"
                      iconPosition="left">

                      Start Live Chat
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      fullWidth
                      iconName="Video"
                      iconPosition="left">

                      Request Video Call
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-surface border-t border-border py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-text-secondary text-sm">
              <p>&copy; {new Date().getFullYear()} MedBeauty Clinic. All rights reserved.</p>
              <p className="mt-2">Your health and privacy are our top priorities.</p>
            </div>
          </div>
        </footer>
      </div>
    </>);

};

export default PatientCare;