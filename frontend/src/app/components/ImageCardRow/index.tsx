import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageCard, { Props as ImageCardProps } from '../ImageCard';

interface Props {
    cards: ImageCardProps[];
}

const ImageCardRowWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ArrowWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:first-of-type {
    left: 0;
    margin-left: 16px;
  }
  &:last-of-type {
    right: 0;
    margin-right: 16px;
  }
`;

const ArrowIcon = styled.div`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  transition: transform 0.2s ease-in-out;
  &:first-of-type {
    transform: rotate(135deg);
  }
`;

const ImageCardRow = ({ cards }: Props) => {
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);
    const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);

    const handleScroll = () => {
        if (!containerRef) return;

        const { scrollLeft, scrollWidth, clientWidth } = containerRef;

        if (scrollLeft > 0) {
            setShowLeftArrow(true);
        } else {
            setShowLeftArrow(false);
        }

        if (scrollLeft < scrollWidth - clientWidth) {
            setShowRightArrow(true);
        } else {
            setShowRightArrow(false);
        }
    };

    const handleArrowClick = (direction: 'left' | 'right') => {
        if (!containerRef) return;

        const scrollAmount = direction === 'left' ? -100 : 100;
        containerRef.scrollTo({
            left: containerRef.scrollLeft + scrollAmount,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        handleScroll();
    }, [containerRef]);

    useEffect(() => {
        window.addEventListener('resize', handleScroll);
        return () => window.removeEventListener('resize', handleScroll);
    }, []);

    return (
        <>
            {showLeftArrow && (
                <ArrowWrapper onClick={() => handleArrowClick('left')}>
                    <ArrowIcon />
                </ArrowWrapper>
            )}
            <ImageCardRowWrapper onScroll={handleScroll} ref={setContainerRef}>
                {cards.map((card) => (
                    <ImageCard key={card.src} {...card} />
                ))}
            </ImageCardRowWrapper>
            {showRightArrow && (
                <ArrowWrapper onClick={() => handleArrowClick('right')}>
                    <ArrowIcon />
                </ArrowWrapper>
            )}
        </>
    );
};

export default ImageCardRow
