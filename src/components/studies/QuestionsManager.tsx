
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  HelpCircle, 
  MessageSquare, 
  Plus, 
  ThumbsUp,
  Tag
} from "lucide-react";
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
  role: string;
}

interface Comment {
  id: string;
  content: string;
  author: Person;
  timestamp: string;
}

interface Question {
  id: string;
  title: string;
  content: string;
  author: Person;
  timestamp: string;
  tags: string[];
  comments: Comment[];
  isResolved: boolean;
}

const demoTeam: Person[] = [
  { id: "1", name: "Alice Chen", initials: "AC", avatar: "", role: "Principal Investigator" },
  { id: "2", name: "Bob Smith", initials: "BS", avatar: "", role: "Research Assistant" },
  { id: "3", name: "Carol Jones", initials: "CJ", avatar: "", role: "PhD Student" },
  { id: "4", name: "David Lee", initials: "DL", avatar: "", role: "Statistician" },
];

const demoQuestions: Question[] = [
  {
    id: "q1",
    title: "Inclusion criteria for caregiver interviews",
    content: "Should we include caregivers who have been providing care for less than 6 months? The protocol isn't clear on this point.",
    author: demoTeam[2],
    timestamp: "2023-06-10T14:32:00",
    tags: ["methodology", "recruitment"],
    comments: [
      {
        id: "c1",
        content: "Good question. I think we should include them but analyze their data separately.",
        author: demoTeam[0],
        timestamp: "2023-06-10T15:45:00"
      }
    ],
    isResolved: false
  },
  {
    id: "q2",
    title: "Technical requirements for the dialogue-based game",
    content: "What are the minimum device specifications we should target for the ExperienceD game?",
    author: demoTeam[1],
    timestamp: "2023-06-05T09:15:00",
    tags: ["technical", "game-development"],
    comments: [
      {
        id: "c2",
        content: "We should aim for compatibility with basic smartphones (iOS 13+ and Android 8+) since many caregivers may not have the latest devices.",
        author: demoTeam[3],
        timestamp: "2023-06-05T10:20:00"
      },
      {
        id: "c3",
        content: "Agreed. Let's also ensure it works well on tablets since some older users prefer larger screens.",
        author: demoTeam[0],
        timestamp: "2023-06-05T11:05:00"
      }
    ],
    isResolved: true
  }
];

interface QuestionsManagerProps {
  title?: string;
  initialQuestions?: Question[];
  team?: Person[];
  currentUser?: Person;
}

export function QuestionsManager({
  title = "Research Questions",
  initialQuestions = demoQuestions,
  team = demoTeam,
  currentUser = demoTeam[0]
}: QuestionsManagerProps) {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [newQuestionTitle, setNewQuestionTitle] = useState("");
  const [newQuestionContent, setNewQuestionContent] = useState("");
  const [isAddingQuestion, setIsAddingQuestion] = useState(false);
  const [newCommentText, setNewCommentText] = useState<{[key: string]: string}>({});
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  const allTags = Array.from(
    new Set(questions.flatMap(q => q.tags))
  );

  const addQuestion = () => {
    if (newQuestionTitle.trim() === "" || newQuestionContent.trim() === "") return;
    
    const newQuestion: Question = {
      id: `q${Date.now()}`,
      title: newQuestionTitle,
      content: newQuestionContent,
      author: currentUser,
      timestamp: new Date().toISOString(),
      tags: selectedTags,
      comments: [],
      isResolved: false
    };
    
    setQuestions([newQuestion, ...questions]);
    setNewQuestionTitle("");
    setNewQuestionContent("");
    setSelectedTags([]);
    setIsAddingQuestion(false);
  };

  const addComment = (questionId: string) => {
    const commentText = newCommentText[questionId];
    if (!commentText || commentText.trim() === "") return;
    
    const newComment: Comment = {
      id: `c${Date.now()}`,
      content: commentText,
      author: currentUser,
      timestamp: new Date().toISOString(),
    };
    
    setQuestions(questions.map(q => 
      q.id === questionId 
        ? { ...q, comments: [...q.comments, newComment] }
        : q
    ));
    
    setNewCommentText({
      ...newCommentText,
      [questionId]: ""
    });
  };

  const toggleResolved = (questionId: string) => {
    setQuestions(questions.map(q => 
      q.id === questionId ? { ...q, isResolved: !q.isResolved } : q
    ));
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  };

  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <Button 
          onClick={() => setIsAddingQuestion(!isAddingQuestion)}
          size="sm"
        >
          {isAddingQuestion ? "Cancel" : (
            <>
              <Plus className="h-4 w-4 mr-1" /> 
              Ask Question
            </>
          )}
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {isAddingQuestion && (
            <div className="space-y-3 border rounded-md p-4 bg-accent/30">
              <div className="space-y-1">
                <Input
                  placeholder="Question title"
                  value={newQuestionTitle}
                  onChange={(e) => setNewQuestionTitle(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Textarea
                  placeholder="Describe your question in detail..."
                  value={newQuestionContent}
                  onChange={(e) => setNewQuestionContent(e.target.value)}
                  rows={3}
                />
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <Tag className="h-4 w-4 text-muted-foreground" />
                {allTags.map(tag => (
                  <Badge 
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Plus className="h-3 w-3 mr-1" /> Add Tag
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {["methodology", "technical", "recruitment", "ethics", "analysis", "game-development"].map(tag => (
                      <DropdownMenuItem
                        key={tag}
                        onClick={() => !selectedTags.includes(tag) && setSelectedTags([...selectedTags, tag])}
                      >
                        {tag}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex justify-end">
                <Button onClick={addQuestion}>Submit Question</Button>
              </div>
            </div>
          )}
          
          <div className="space-y-4">
            {questions.map((question) => (
              <div 
                key={question.id} 
                className={`rounded-md border ${
                  question.isResolved ? "bg-muted/30" : "bg-background"
                }`}
              >
                <div className="p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-lg leading-tight flex items-center">
                      <HelpCircle className={`h-5 w-5 mr-2 ${
                        question.isResolved ? "text-green-500" : "text-amber-500"
                      }`} />
                      {question.title}
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleResolved(question.id)}
                      className={question.isResolved ? "text-green-600" : "text-muted-foreground"}
                    >
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      {question.isResolved ? "Resolved" : "Mark Resolved"}
                    </Button>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={question.author.avatar} />
                      <AvatarFallback className="text-xs">
                        {question.author.initials}
                      </AvatarFallback>
                    </Avatar>
                    <span>{question.author.name}</span>
                    <span>•</span>
                    <span>{formatDate(question.timestamp)}</span>
                  </div>
                  
                  <p className="text-sm">{question.content}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {question.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {question.comments.length > 0 && (
                    <div className="mt-4 border-t pt-3 space-y-3">
                      <h4 className="font-medium text-sm flex items-center mb-2">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Responses ({question.comments.length})
                      </h4>
                      
                      {question.comments.map(comment => (
                        <div key={comment.id} className="pl-4 border-l-2 py-1">
                          <div className="flex items-center space-x-2 text-sm mb-1">
                            <Avatar className="h-5 w-5">
                              <AvatarImage src={comment.author.avatar} />
                              <AvatarFallback className="text-xs">
                                {comment.author.initials}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{comment.author.name}</span>
                            <span className="text-muted-foreground text-xs">
                              {formatDate(comment.timestamp)}
                            </span>
                          </div>
                          <p className="text-sm">{comment.content}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="mt-3 flex space-x-2">
                    <Input
                      placeholder="Add a response..."
                      value={newCommentText[question.id] || ""}
                      onChange={(e) => 
                        setNewCommentText({
                          ...newCommentText,
                          [question.id]: e.target.value
                        })
                      }
                      onKeyDown={(e) => e.key === "Enter" && addComment(question.id)}
                      className="flex-1"
                    />
                    <Button 
                      onClick={() => addComment(question.id)}
                      size="sm"
                    >
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
