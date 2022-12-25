import {GetServerSideProps} from "next";
import {getSurah, getTafsirs, getVerses} from "../../utils/fetcher";
import {IVerse, ISurah} from "../../interfaces/interfaces";
import {Container, Modal, Text} from "@mantine/core";
import {VerseCard} from "../../components/VerseCard";
import {useState} from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const surahId: number = Number(context.params?.surahId || 0);
  const [verses, tafsirs, surah] = await Promise.all([
    getVerses(surahId),
    getTafsirs(surahId),
    getSurah(surahId)
  ]);

  return {
    props: {
      surah,
      verses: verses.map((verse: any, i: number) => {
        return {
          ...verse,
          commentary: tafsirs[i].tafsir,
        }
      })
    }
  }
}

export default function Surah({ verses, surah }: { verses: IVerse[], surah: ISurah }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVerse, setModalVerse] = useState<IVerse | null>(null);

  const openCommentary = (verse: IVerse) => {
    console.log({verse})
    setIsModalOpen(true);
    setModalVerse(verse);
  }

  return (
    <Container>
      <Modal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Surah ${modalVerse?.surahId}, Verse ${modalVerse?.verse}`}
      >
        {modalVerse && (
          <Text size="sm" mt="md">
            <div dangerouslySetInnerHTML={{ __html: modalVerse.commentary }} />
          </Text>
        )}
      </Modal>
      <Text size={25} align="center" weight="xl" my="xl">{surah.latinName}</Text>
      {verses.map(verse => <VerseCard key={`${verse.surahId}_${verse.verse}`} verse={verse} openCommentary={openCommentary} />)}
    </Container>
  )
}