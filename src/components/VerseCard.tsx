import {Card, Text } from '@mantine/core';
import {IVerse} from "../interfaces/interfaces";
import React from "react";
import {useWindowDimension} from "../hooks/useWindowDimension";

export interface VerseCardProps {
  verse: IVerse;
  openCommentary: (verse: IVerse) => void;
}

export const VerseCard = ({ verse, openCommentary }: VerseCardProps) => {
  const {width} = useWindowDimension();
  const arabicFontSize = width/11;
  const fontSize = width/20;
  return (
    <Card
      shadow="sm"
      p="md"
      my="md"
      onClick={() => openCommentary(verse)}
      style={{ cursor: 'pointer' }}
    >
      <Text weight={500} size={arabicFontSize} align="center" style={{ fontFamily: 'my-arabic-font' }}>
        <span>{verse.verse}</span>
      </Text>
      <Text weight={500} size={arabicFontSize} align="right" style={{ fontFamily: 'my-arabic-font' }}>
        <span>{verse.arabic}</span>
      </Text>
      <Text size={fontSize}>
        {verse.indTranslation}
      </Text>
    </Card>
  )
}