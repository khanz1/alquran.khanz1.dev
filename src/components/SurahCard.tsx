import {Box, Card, Skeleton, Text} from "@mantine/core";
import React from "react";
import Link from "next/link";
import {ISurah} from "../pages/interfaces";
import {useWindowDimension} from "../hooks/useWindowDimension";


export const SurahCard = ({ surah }: { surah: ISurah }) => {
  const {width} = useWindowDimension();
  const fontSize = width/20;
  return (
    <Card
      shadow="sm"
      p="sm"
      my="sm"
      component={Link}
      href={`/surah/${surah.number}`}
      style={{ width: '100%' }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Text weight={500} size={fontSize} align="right" mt="md" style={{ fontFamily: 'my-arabic-font' }}>
          <span>{surah.name}</span>
        </Text>
        <Text weight={500} size={fontSize} align="right" mt="md" style={{ fontFamily: 'my-arabic-font' }}>
          <span>{surah.latinName}</span>
        </Text>
      </Box>
    </Card>
  )
}