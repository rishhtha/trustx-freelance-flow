
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useForm } from "react-hook-form";

// Define the form schema for the form validation
interface ProjectFormValues {
  title: string;
  description: string;
  budget: string;
  deadline: string;
  skills: string[];
}

const PostProject = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [skillInput, setSkillInput] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  
  // Initialize the form
  const form = useForm<ProjectFormValues>({
    defaultValues: {
      title: '',
      description: '',
      budget: '',
      deadline: '',
      skills: [],
    }
  });
  
  const handleAddSkill = () => {
    if (skillInput.trim() && !selectedSkills.includes(skillInput.trim())) {
      setSelectedSkills([...selectedSkills, skillInput.trim()]);
      setSkillInput('');
    }
  };
  
  const handleRemoveSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter(s => s !== skill));
  };
  
  const onSubmit = (values: ProjectFormValues) => {
    // Validate form
    if (selectedSkills.length === 0) {
      toast({
        title: "Missing information",
        description: "Please add at least one required skill.",
        variant: "destructive",
      });
      return;
    }
    
    // Include selected skills in the submission
    const projectData = {
      ...values,
      skills: selectedSkills
    };
    
    // Console log for debugging
    console.log("Project data to submit:", projectData);
    
    // Mock submission - would connect to smart contract in real implementation
    toast({
      title: "Project Created!",
      description: "Your project has been successfully created.",
    });
    
    // Redirect to marketplace after successful creation
    setTimeout(() => {
      navigate('/marketplace');
    }, 2000);
  };
  
  return (
    <Layout>
      <div className="container py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Post a New Project</h1>
          <p className="text-muted-foreground mb-8">
            Create a project and find the perfect freelancer for your needs.
          </p>
          
          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
                <CardDescription>
                  Provide detailed information about your project to attract the right freelancers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Title</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="E.g., DeFi Dashboard Development"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            A clear title helps freelancers understand your project.
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your project in detail..."
                              className="min-h-32"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Include all relevant details, requirements, and expectations.
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Budget Range</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a budget range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Budget Range</SelectLabel>
                                  <SelectItem value="under-500">Under $500</SelectItem>
                                  <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                                  <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                                  <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                                  <SelectItem value="over-10000">Over $10,000</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="deadline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Deadline</FormLabel>
                            <FormControl>
                              <Input
                                type="date"
                                {...field}
                                min={new Date().toISOString().split('T')[0]}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div>
                      <FormLabel>Required Skills</FormLabel>
                      <div className="flex gap-2">
                        <Input
                          placeholder="E.g., Solidity, React, Web3..."
                          value={skillInput}
                          onChange={(e) => setSkillInput(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleAddSkill();
                            }
                          }}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleAddSkill}
                        >
                          Add
                        </Button>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        {selectedSkills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="pl-2 pr-1 py-1 flex items-center gap-1"
                          >
                            {skill}
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="h-4 w-4 p-0 hover:bg-transparent"
                              onClick={() => handleRemoveSkill(skill)}
                            >
                              <X className="h-3 w-3" />
                              <span className="sr-only">Remove {skill}</span>
                            </Button>
                          </Badge>
                        ))}
                      </div>
                      
                      {selectedSkills.length === 0 && (
                        <p className="text-sm text-muted-foreground mt-2">
                          Add skills that are required for your project.
                        </p>
                      )}
                    </div>
                    
                    <div className="pt-4">
                      <Button type="submit" className="w-full md:w-auto">
                        Create Project
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
                <CardDescription>
                  Learn about our project creation and escrow process.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 text-primary p-2">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Create Your Project</h3>
                    <p className="text-sm text-muted-foreground">
                      Fill out the project details and requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 text-primary p-2">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Receive Proposals</h3>
                    <p className="text-sm text-muted-foreground">
                      Freelancers will submit bids and proposals for your project.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 text-primary p-2">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Select a Freelancer</h3>
                    <p className="text-sm text-muted-foreground">
                      Review profiles and proposals to select the right freelancer.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 text-primary p-2">
                    <span className="text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Fund the Escrow</h3>
                    <p className="text-sm text-muted-foreground">
                      Deposit funds into the smart contract escrow to start the project.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostProject;
