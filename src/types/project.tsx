export interface Project {
  id: string;
  status: 'Completed' | 'Available' | 'In Progress';
  category: 'Construction' | 'Property Listing';
  title: string;
  location: string;
  summary: string;
  content: string;
  image: string;
}