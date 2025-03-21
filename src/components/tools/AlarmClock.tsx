
import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Clock, Volume2, VolumeX } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const AlarmClock = () => {
  const [alarmTime, setAlarmTime] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const [isRinging, setIsRinging] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("https://assets.mixkit.co/active_storage/sfx/1028/1028.wav");
    audioRef.current.loop = true;
    
    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);
  
  useEffect(() => {
    // Update current time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    // Check if alarm should ring
    if (isAlarmSet && !isRinging) {
      const now = currentTime;
      const alarm = new Date();
      
      const [hours, minutes] = alarmTime.split(":").map(Number);
      
      alarm.setHours(hours);
      alarm.setMinutes(minutes);
      alarm.setSeconds(0);
      
      // If alarm time is in the past, set it for tomorrow
      if (now > alarm) {
        alarm.setDate(alarm.getDate() + 1);
      }
      
      const timeUntilAlarm = alarm.getTime() - now.getTime();
      
      // If timeUntilAlarm is less than 1 second, trigger the alarm
      if (timeUntilAlarm < 1000) {
        setIsRinging(true);
        if (audioRef.current && !isMuted) {
          audioRef.current.play();
        }
        
        toast({
          title: "Alarm!",
          description: `It's ${alarmTime}`,
          duration: 10000,
        });
      }
    }
  }, [currentTime, alarmTime, isAlarmSet, isRinging, isMuted, toast]);
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };
  
  const handleSetAlarm = () => {
    if (!alarmTime) {
      toast({
        title: "Set a time first",
        description: "Please select a time for your alarm.",
        variant: "destructive",
      });
      return;
    }
    
    setIsAlarmSet(true);
    toast({
      title: "Alarm set",
      description: `Alarm set for ${alarmTime}`,
    });
  };
  
  const handleCancelAlarm = () => {
    setIsAlarmSet(false);
    setIsRinging(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    
    toast({
      title: "Alarm canceled",
      description: "Your alarm has been canceled.",
    });
  };
  
  const handleStopRinging = () => {
    setIsRinging(false);
    setIsAlarmSet(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
    
    if (audioRef.current) {
      if (!isMuted) {
        audioRef.current.pause();
      } else if (isRinging) {
        audioRef.current.play();
      }
    }
  };
  
  // Get current time in HH:MM format to set as default value
  const getCurrentTimeForInput = () => {
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-md">
        <CardHeader className="bg-primary/5">
          <div className="flex items-center">
            <Bell className="mr-2 text-primary" size={24} />
            <CardTitle>Alarm Clock</CardTitle>
          </div>
          <CardDescription>
            Set alarms with sound notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 pb-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center justify-center text-5xl font-bold tracking-tighter">
              {formatTime(currentTime)}
            </div>
            
            <div className="grid w-full max-w-sm items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="alarm-time" className="text-sm font-medium">Set Alarm Time</label>
                <Input
                  id="alarm-time"
                  type="time"
                  value={alarmTime || getCurrentTimeForInput()}
                  onChange={(e) => setAlarmTime(e.target.value)}
                  disabled={isAlarmSet}
                  className="text-center text-lg"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {!isAlarmSet ? (
                <Button 
                  onClick={handleSetAlarm} 
                  className="flex items-center gap-2"
                  disabled={!alarmTime}
                >
                  <Bell size={16} />
                  Set Alarm
                </Button>
              ) : (
                <Button 
                  onClick={handleCancelAlarm} 
                  variant="destructive"
                  className="flex items-center gap-2"
                >
                  <Bell size={16} />
                  Cancel Alarm
                </Button>
              )}
              
              <Button
                variant="outline"
                onClick={toggleMute}
                className="flex items-center gap-2"
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                {isMuted ? "Unmute" : "Mute"}
              </Button>
              
              {isRinging && (
                <Button 
                  onClick={handleStopRinging} 
                  variant="destructive"
                  className="flex items-center gap-2"
                >
                  Stop Alarm
                </Button>
              )}
            </div>
            
            {isAlarmSet && !isRinging && (
              <div className="bg-primary/10 px-4 py-2 rounded-md">
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>Alarm set for {alarmTime}</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
