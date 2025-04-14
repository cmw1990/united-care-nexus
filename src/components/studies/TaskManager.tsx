
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Plus, Calendar, UserPlus } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Person {
  id: string;
  name: string;
  avatar?: string;
  initials: string;
}

interface Task {
  id: string;
  title: string;
  completed: boolean;
  assignedTo?: Person;
  dueDate?: string;
  priority: "low" | "medium" | "high";
}

const demoTeam: Person[] = [
  { id: "1", name: "Alice Chen", initials: "AC", avatar: "" },
  { id: "2", name: "Bob Smith", initials: "BS", avatar: "" },
  { id: "3", name: "Carol Jones", initials: "CJ", avatar: "" },
  { id: "4", name: "David Lee", initials: "DL", avatar: "" },
];

const demoTasks: Task[] = [
  { 
    id: "task1", 
    title: "Review literature on caregiver communication", 
    completed: true, 
    assignedTo: demoTeam[0],
    dueDate: "2023-06-15",
    priority: "high"
  },
  { 
    id: "task2", 
    title: "Draft protocol section on methodology", 
    completed: false, 
    assignedTo: demoTeam[1],
    dueDate: "2023-06-20",
    priority: "medium"
  },
  { 
    id: "task3", 
    title: "Schedule interviews with caregivers", 
    completed: false, 
    assignedTo: demoTeam[2],
    dueDate: "2023-06-25",
    priority: "low"
  },
];

interface TaskManagerProps {
  title?: string;
  initialTasks?: Task[];
  team?: Person[];
}

export function TaskManager({ 
  title = "Task Management", 
  initialTasks = demoTasks,
  team = demoTeam
}: TaskManagerProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const addTask = () => {
    if (newTaskTitle.trim() === "") return;
    
    const newTask: Task = {
      id: `task${Date.now()}`,
      title: newTaskTitle,
      completed: false,
      priority: "medium"
    };
    
    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  };

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const assignTask = (taskId: string, personId: string) => {
    const person = team.find(p => p.id === personId);
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, assignedTo: person } : task
    ));
  };

  const setPriority = (taskId: string, priority: "low" | "medium" | "high") => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, priority } : task
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case "high": return "bg-red-100 text-red-800 hover:bg-red-200";
      case "medium": return "bg-amber-100 text-amber-800 hover:bg-amber-200";
      case "low": return "bg-green-100 text-green-800 hover:bg-green-200";
      default: return "bg-slate-100 text-slate-800 hover:bg-slate-200";
    }
  };

  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <Input
              placeholder="Add a new task..."
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
              className="flex-1"
            />
            <Button onClick={addTask} size="sm">
              <Plus className="h-4 w-4 mr-1" /> Add
            </Button>
          </div>
          
          <div className="space-y-2">
            {tasks.map((task) => (
              <div 
                key={task.id} 
                className={`flex items-start justify-between space-x-2 rounded-md border p-3 ${
                  task.completed ? "bg-muted/40" : "bg-background"
                }`}
              >
                <div className="flex items-start space-x-3 min-w-0">
                  <Checkbox 
                    id={task.id} 
                    checked={task.completed}
                    onCheckedChange={() => toggleTaskCompletion(task.id)}
                  />
                  <div className="space-y-1 min-w-0">
                    <Label 
                      htmlFor={task.id}
                      className={`font-medium line-clamp-2 ${
                        task.completed ? "line-through text-muted-foreground" : ""
                      }`}
                    >
                      {task.title}
                    </Label>
                    {task.dueDate && (
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" /> 
                        Due: {new Date(task.dueDate).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${getPriorityColor(task.priority)}`}
                  >
                    {task.priority}
                  </Badge>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        {task.assignedTo ? (
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={task.assignedTo.avatar} />
                            <AvatarFallback className="text-xs">
                              {task.assignedTo.initials}
                            </AvatarFallback>
                          </Avatar>
                        ) : (
                          <UserPlus className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {team.map((person) => (
                        <DropdownMenuItem 
                          key={person.id}
                          onClick={() => assignTask(task.id, person.id)}
                        >
                          <div className="flex items-center">
                            <Avatar className="h-6 w-6 mr-2">
                              <AvatarImage src={person.avatar} />
                              <AvatarFallback className="text-xs">
                                {person.initials}
                              </AvatarFallback>
                            </Avatar>
                            <span>{person.name}</span>
                          </div>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  <Select 
                    defaultValue={task.priority}
                    onValueChange={(value) => setPriority(task.id, value as "low" | "medium" | "high")}
                  >
                    <SelectTrigger className="w-24 h-8">
                      <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
