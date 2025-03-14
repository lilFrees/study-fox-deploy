interface PageProps {
  params: { locale: string };
}

function OverviewPage({ params }: PageProps) {
  const { locale } = params;
  return (
    <div>
      <h1>Overview</h1>
      <p>{locale}</p>
    </div>
  );
}

export default OverviewPage;
