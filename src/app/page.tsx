import { Button } from '@nextui-org/button';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button color="primary">Click Me</Button>
      <Button color="primary" className="bg-accent-purple-500">
        Click Me
      </Button>
    </main>
  );
}
