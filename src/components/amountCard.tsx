import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Progress } from "@/components/ui/progress";

type CardProps = {
  title: any;
  description: any;
  details: any;
  percentage: any;
  value: any;
};

export default function AmountCard({ title, description, details, percentage, value}: CardProps) {
  return (
    <Card x-chunk="dashboard-05-chunk-2">
      <CardHeader>
        <CardDescription>{description}</CardDescription>
        <CardTitle className="text-4xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">
          {percentage} comparado {details}
        </div>
      </CardContent>
      <CardFooter>
        <Progress aria-label="25% increase" value={value} />
      </CardFooter>
    </Card>
  );
}
