interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Pending a pretty super sexy description',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: 'in-progress Just an in-progress description',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description: 'completed Just a completed description',
      status: 'completed',
      createdAt: Date.now() - 20000000,
    },
  ],
};
