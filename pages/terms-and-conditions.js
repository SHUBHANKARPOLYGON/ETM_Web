import Layout from "../components/Layout";
import dynamic from 'next/dynamic';
const PdfViewForTerms = dynamic(() => import('../components/PdfViewForTerms.js'), {
  ssr: false,
});
const terms = () => {
  return (
    <Layout>
       <PdfViewForTerms />
    </Layout>
  );
};

export default terms;
