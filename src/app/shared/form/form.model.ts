export type FieldType = 'text' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'date' | 'file' | 'toggle';

export interface FormField {
  key: string;
  label: string;
  type: FieldType;
  options: string[];
  required?: boolean;
  placeholder?: string;
  value?: any;
}
