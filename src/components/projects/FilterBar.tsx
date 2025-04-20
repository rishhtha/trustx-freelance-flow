
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Check, ChevronDown } from 'lucide-react';

const skills = [
  'Web Development',
  'Smart Contracts',
  'UI/UX Design',
  'Content Writing',
  'Solidity',
  'React',
  'Marketing',
  'Security Audit',
];

const budgetRanges = [
  'Under $500',
  '$500 - $1,000',
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  'Over $10,000',
];

const FilterBar = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('newest');

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const selectBudget = (budget: string) => {
    if (selectedBudget === budget) {
      setSelectedBudget(null);
    } else {
      setSelectedBudget(budget);
    }
  };

  const clearFilters = () => {
    setSelectedSkills([]);
    setSelectedBudget(null);
    setSortBy('newest');
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            Skills
            {selectedSkills.length > 0 && (
              <span className="ml-1 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                {selectedSkills.length}
              </span>
            )}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            {skills.map((skill) => (
              <DropdownMenuItem
                key={skill}
                onSelect={(e) => {
                  e.preventDefault();
                  toggleSkill(skill);
                }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="h-4 w-4 border rounded flex items-center justify-center">
                  {selectedSkills.includes(skill) && <Check className="h-3 w-3" />}
                </div>
                <span>{skill}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            Budget
            {selectedBudget && (
              <span className="ml-1 h-2 w-2 rounded-full bg-primary" />
            )}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            {budgetRanges.map((budget) => (
              <DropdownMenuItem
                key={budget}
                onSelect={(e) => {
                  e.preventDefault();
                  selectBudget(budget);
                }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="h-4 w-4 border rounded-full flex items-center justify-center">
                  {selectedBudget === budget && (
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  )}
                </div>
                <span>{budget}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            Sort by
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem
            onSelect={() => setSortBy('newest')}
            className="flex items-center gap-2"
          >
            {sortBy === 'newest' && <Check className="h-4 w-4" />}
            <span>Newest first</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => setSortBy('oldest')}
            className="flex items-center gap-2"
          >
            {sortBy === 'oldest' && <Check className="h-4 w-4" />}
            <span>Oldest first</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => setSortBy('budget_high')}
            className="flex items-center gap-2"
          >
            {sortBy === 'budget_high' && <Check className="h-4 w-4" />}
            <span>Budget: High to low</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => setSortBy('budget_low')}
            className="flex items-center gap-2"
          >
            {sortBy === 'budget_low' && <Check className="h-4 w-4" />}
            <span>Budget: Low to high</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {(selectedSkills.length > 0 || selectedBudget) && (
        <Button variant="ghost" onClick={clearFilters} size="sm">
          Clear filters
        </Button>
      )}
    </div>
  );
};

export default FilterBar;
