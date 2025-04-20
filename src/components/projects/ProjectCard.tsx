
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  budget: string;
  deadline: string;
  skills: string[];
  status?: 'open' | 'in-progress' | 'completed' | 'in-dispute';
}

const statusMap = {
  'open': { color: 'bg-green-100 text-green-800', label: 'Open' },
  'in-progress': { color: 'bg-blue-100 text-blue-800', label: 'In Progress' },
  'completed': { color: 'bg-gray-100 text-gray-800', label: 'Completed' },
  'in-dispute': { color: 'bg-red-100 text-red-800', label: 'In Dispute' },
};

const ProjectCard = ({ id, title, description, budget, deadline, skills, status = 'open' }: ProjectCardProps) => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const { color, label } = statusMap[status];

  return (
    <Card className="card-hover">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-xl">{truncateText(title, 40)}</CardTitle>
          <div className="mt-1">
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${color}`}>
              {label}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium">{budget}</p>
          <p className="text-xs text-muted-foreground">Due {deadline}</p>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <p className="text-sm text-muted-foreground mb-4">{truncateText(description, 120)}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Link 
          to={`/project/${id}`} 
          className="w-full text-center py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
        >
          View Project
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
