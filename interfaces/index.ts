export interface CardProps {
  title: string;
  imageUrl: string;
  price: number;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}