import Link from 'next/link';
import { Person } from '../interfaces';
import { Music } from 'lucide-react';

type PersonProps = {
  person: Person;
};

export default function PersonComponent({ person }: PersonProps) {
  return (
    <li>
      <Music />
      <Link href="/person/[id]" as={`/person/${person.id}`}>
        {person.name}
      </Link>
    </li>
  );
}
