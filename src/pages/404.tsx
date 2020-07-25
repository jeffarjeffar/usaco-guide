import * as React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Author, Authors } from '../../content/authors/authors';
import TopNavigationBar from '../components/TopNavigationBar';
import { useRef } from 'react';

export default function NotFoundPage(props: PageProps) {
  return (
    <Layout>
      <SEO title="404 Not Found" />
      <TopNavigationBar />

      <h1 className="text-center mt-16 text-4xl sm:text-5xl font-black">
        404 Not Found
      </h1>
      <p className="text-center mt-4">
        <Link to="/" className="text-xl text-blue-600">
          Return Home
        </Link>
      </p>
    </Layout>
  );
}