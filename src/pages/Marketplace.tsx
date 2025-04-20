
import Layout from '@/components/layout/Layout';
import ProjectsList from '@/components/projects/ProjectsList';
import FilterBar from '@/components/projects/FilterBar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

const Marketplace = () => {
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Project Marketplace</h1>
            <p className="text-muted-foreground mt-1">Find and bid on projects that match your skills</p>
          </div>
          <Button asChild className="flex items-center gap-2">
            <Link to="/post-project">
              <Plus size={16} />
              Post a Project
            </Link>
          </Button>
        </div>
        
        <FilterBar />
        <ProjectsList />
        
        <div className="mt-8 flex justify-center">
          <Button variant="outline">Load More Projects</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Marketplace;
