import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '@layouts/base';
import Author from '@comps/author';
import Category from '@comps/category';
import IssuesNum from '@comps/issues_num';
import '@styles/home.scss';

export default function IndexPage(props: any) {
  return (
    <Layout className="home-page">
      <div className="markdown-body issues-list">
        <div>
          {props.data.allDiscussionsJson.nodes.map(({ node }: any) => {
            if (!node) return null;

            const category = node?.category;

            return (
              <div className="item" key={node.number}>
                <Author
                  author={node.author}
                  date={node.updatedAt}
                  extra={<IssuesNum number={node.number} />}
                />
                <div className="post-info">
                  <Link className="title" to={`/issues/${node.number}`}>
                    {node.title}
                  </Link>
		  <Category data={category} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  {
    allDiscussionsJson {
      nodes {
        node {
          number
          title
          updatedAt
          author {
            avatarUrl
            login
            url
          }
          category {
            name
            isAnswerable
            emoji
          }
        }
      }
    }
  }
`;
