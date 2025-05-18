import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALX Listing App</title>
      </Head>

      <main className="p-4">
        <h1 className="text-3xl font-bold mb-6">Featured Listings</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card title="Modern Apartment" imageUrl="/assets/house1.jpg" price={250} />
          <Card title="Cozy Cottage" imageUrl="/assets/house2.jpg" price={180} />
          <Card title="Luxury Villa" imageUrl="/assets/house3.jpg" price={520} />
        </div>

        <div className="mt-6">
          <Button label="Explore More" onClick={() => alert('More listings coming soon!')} />
        </div>
      </main>
    </div>
  );
}
