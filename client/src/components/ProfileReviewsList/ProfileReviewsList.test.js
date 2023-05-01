import { render, screen } from "@testing-library/react";
import ProfileReviewsList from ".";
import { format } from 'date-fns';


describe("ProfileReviewsList", () => {

    const reviews = [{       
            id: 1,       
            movieCover: "http://example.com/movie1.jpg",       
            title: "Movie 1",       
            review: "This is a great movie",       
            rating: 5,       
            createdAt: "2023-04-11T19:12:18.730Z"  
        },  
        {
            id: 2,       
            movieCover: "http://example.com/movie2.jpg",       
            title: "Movie 2",       
            review: "This is also a great movie",       
            rating: 4,      
            createdAt: "2023-04-10T12:34:56.789Z" 
        }];

        it("renders reviews when user has reviews", () => {
            const props = {
              data: {
                reviews,
              },
            };
            render(<ProfileReviewsList {...props} />);
            const reviewTitles = screen.getAllByText(/Movie/);
            expect(reviewTitles).toHaveLength(reviews.length);
          });

        
          it("renders message when user has no reviews", () => {
            const props = {
              data: {
                reviews: [],
              },
            };
            render(<ProfileReviewsList {...props} />);
            const message = screen.getByText(
              "This user hasn't registered any reviews yet."
            );
            expect(message).toBeInTheDocument();
          });

          it("renders reviews in reverse chronological order", () => {
            const props = {
              data: {
                reviews,
              },
            };
                      
            render(<ProfileReviewsList {...props} />);
            const reviewTitles = screen.getAllByText(/Movie/);
            let previousCreatedAtMillis = Infinity;
          
            let previousCreatedAt = new Date();
            reviewTitles.forEach((title) => {
              const parent = title.closest('.list-reviews-section');
              const createdAtString = parent.querySelector('.review-date').textContent;
              const createdAt = format(new Date(createdAtString.split('on ')[1]), 'yyyy-MM-dd HH:mm:ss');
              const createdAtMillis = new Date(createdAt).getTime();
              expect(createdAtMillis).toBeLessThanOrEqual(previousCreatedAtMillis);
              previousCreatedAtMillis = createdAtMillis;
            });
          });
});


