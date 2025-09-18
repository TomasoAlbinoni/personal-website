import { headers } from 'next/headers';

export default async function Home() {
  const headersList = await headers();
  const ip =
    headersList.get('x-forwarded-for') ||
    headersList.get('x-real-ip') ||
    'Unknown';
  return (
    <>
      <h1 className="entry-title">Thomas van Nellen</h1>
      <div className="text-with-img">
      <p>I&apos;m Thomas van Nellen, a senior software developer with over a decade of experience building secure, maintainable software solutions—from backend systems and CRM integrations to app development with Unity. 
      I&apos;m passionate about clean, efficient code and enjoy solving complex technical problems with a focus on collaboration, reliability, and long-term scalability. 
      Whether I&apos;m optimizing a SQL query for speed, writing PHP or C#, or analyzing large datasets, I aim to deliver solutions that are both elegant and effective. 
      I&apos;m always eager to learn, improve, and contribute meaningfully to the teams and projects I work with.</p>
      <img src="picture-cropped.jpg" alt="Thomas" />
      </div>
      <p>Your IP: {ip}</p>
    </>
  );
}
