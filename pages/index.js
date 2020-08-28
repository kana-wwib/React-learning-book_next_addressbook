import Link from 'next/link';
import Layout from '../components/Layout';

export default () =>(
  <Layout header="Next" title="Top page.">
    <Link href="./address"><button>
      go to address &gt;&gt;
    </button></Link>
  </Layout>
);
