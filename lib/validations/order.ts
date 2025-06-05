import { z } from 'zod';

export const orderSchema = z.object({
    // Client Information

    clientName: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
      phone: z.string().min(10, 'Phone number must be at least 10 digits'),
      company: z.string().optional(),

    // Project Details
    projectType: z.enum(['npm-package', 'costum-react-component', 'nextjs-app', 'API-integration', 'other'], {
        required_error: 'Please select a project type',
    }),
    projectTitle: z.string().min(3, 'Project title must be at least 3 characters'),
    description: z.string().min(6, 'Description must be at least 60 characters'),
    requirements: z.string().min(10, 'Requirements must be at least 10 characters'),

    // Timeline & Budget
    deadline: z.string().min(1, 'Please select a deadline'),
    budget: z.enum(['0-200','200-500','500-1000', '1000-2500', '2500-5000', '5000+', 'negotiable'], {
        required_error: 'Please select a budget range',
    }),
    priority: z.enum(['low', 'medium', 'high', 'urgent']),

    // Additional Information
    additionalNotes: z.string().optional(),
    attachments: z.array(z.string()).optional(),
});

export type OrderFormData = z.infer<typeof orderSchema>;


