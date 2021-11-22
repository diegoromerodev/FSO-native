import React from "react";
import {render} from "@testing-library/react-native";
import { RepositoryListContainer } from "../components/RepositoryList";

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
      it('renders repository information correctly', () => {
        const repositories = {
          totalCount: 8,
          pageInfo: {
            hasNextPage: true,
            endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          edges: [
            {
              node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
              },
              cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
            },
            {
              node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars1.githubusercontent.com/u/54310907?v=4',
              },
              cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            },
          ],
        };
        const {debug, getAllByTestId, getByText} = render(
            <RepositoryListContainer repositories={repositories} />
        );
            
        console.log(debug());
        const repos = getAllByTestId("repoItem");
        const infoIcons = getAllByTestId("infoIcon");

        expect(getByText('jaredpalmer/formik')).toBeTruthy();
        expect(repos[0]).toHaveTextContent("Build forms in React, without the tears");
        expect(repos[0]).toHaveTextContent("TypeScript");

        expect(infoIcons[0]).toHaveTextContent("Forks");
        expect(infoIcons[1]).toHaveTextContent("Stars");
        expect(infoIcons[2]).toHaveTextContent("Reviews");
        expect(infoIcons[3]).toHaveTextContent("Rating");

        expect(getByText('async-library/react-async')).toBeTruthy();
        expect(repos[1]).toHaveTextContent("Flexible promise-based React data loader");
        expect(repos[1]).toHaveTextContent("JavaScript");

        expect(infoIcons[4]).toHaveTextContent("Forks");
        expect(infoIcons[5]).toHaveTextContent("Stars");
        expect(infoIcons[6]).toHaveTextContent("Reviews");
        expect(infoIcons[7]).toHaveTextContent("Rating");
        
      });
    });
  });