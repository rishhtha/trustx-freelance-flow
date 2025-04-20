
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ProfileCardProps {
  name: string;
  address: string;
  avatar?: string;
  bio: string;
  skills: string[];
  rating: number;
  completedProjects: number;
}

const ProfileCard = ({
  name,
  address,
  avatar,
  bio,
  skills,
  rating,
  completedProjects,
}: ProfileCardProps) => {
  // Generate initials from name
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  // Format wallet address with ellipsis
  const formattedAddress = `${address.substring(0, 6)}...${address.substring(
    address.length - 4
  )}`;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar className="h-16 w-16">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="text-lg bg-primary text-primary-foreground">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground font-mono">{formattedAddress}</p>
          <div className="flex items-center mt-1">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating)
                      ? "text-yellow-500 fill-yellow-500"
                      : i < rating
                      ? "text-yellow-500 fill-yellow-500 opacity-50"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
            <span className="mx-2 text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">
              {completedProjects} projects
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{bio}</p>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
