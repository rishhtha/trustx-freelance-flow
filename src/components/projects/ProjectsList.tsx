
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  budget: string;
  deadline: string;
  skills: string[];
  status?: 'open' | 'in-progress' | 'completed' | 'in-dispute';
}

// Mock data for projects
const mockProjects: Project[] = [
  {
    id: '1',
    title: 'NFT Marketplace Development',
    description: 'Looking for a developer to build a custom NFT marketplace with unique features for digital artists.',
    budget: '$3,000 - $5,000',
    deadline: 'Jun 15, 2025',
    skills: ['Solidity', 'React', 'Smart Contracts'],
    status: 'open',
  },
  {
    id: '2',
    title: 'DeFi Dashboard UI/UX Design',
    description: 'Need a talented designer to create intuitive user interfaces for our DeFi dashboard application.',
    budget: '$1,500 - $2,500',
    deadline: 'May 30, 2025',
    skills: ['UI/UX', 'Figma', 'Web3'],
    status: 'open',
  },
  {
    id: '3',
    title: 'Smart Contract Security Audit',
    description: 'Seeking an experienced security researcher to perform a thorough audit of our DeFi protocol smart contracts.',
    budget: '$4,000 - $6,000',
    deadline: 'Jun 10, 2025',
    skills: ['Solidity', 'Security', 'Audit'],
    status: 'in-progress',
  },
  {
    id: '4',
    title: 'Web3 Content Writer',
    description: 'Looking for a writer with deep knowledge of Web3 to create educational content for our blog and documentation.',
    budget: '$500 - $1,000',
    deadline: 'May 25, 2025',
    skills: ['Content Writing', 'Web3', 'Research'],
    status: 'open',
  },
];

interface ProjectsListProps {
  limit?: number;
  showSearch?: boolean;
}

const ProjectsList = ({ limit, showSearch = true }: ProjectsListProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const displayProjects = limit ? mockProjects.slice(0, limit) : mockProjects;

  const filteredProjects = displayProjects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      {showSearch && (
        <div className="mb-6 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">Filters</Button>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No projects found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsList;
