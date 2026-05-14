import PageHeader from '../components/layout/PageHeader.jsx';
import Apply from '../components/sections/Apply.jsx';

export default function ApplyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Apply for financing"
        title="Start your application."
        lede="Submissions are reviewed once Edison Finance receives its NBFC license (expected July 2026). Early applicants are prioritised in our pilot district rollout."
      />
      <Apply noHead />
    </>
  );
}
