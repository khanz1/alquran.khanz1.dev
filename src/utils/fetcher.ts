import axios from 'axios';

export const getSurahs = async () => {
  const { data } = await axios.get("https://equran.id/api/surat", {
    headers: {
      "Accept-Encoding": "gzip, deflate, compress",
    },
  });
  return data.map((surah: any) => {
    return {
      name: surah.nama,
      latinName: surah.nama_latin,
      verseCount: surah.jumlah_ayat,
      revelationPlace: surah.tempat_turun,
      meaning: surah.arti,
      description: surah.deskripsi,
      audio: surah.audio,
    };
  });
};

export const getSurah = async (surahNumber: number) => {
  const { data: surah } = await axios.get(`https://equran.id/api/surat/${surahNumber}`, {
    headers: {
      "Accept-Encoding": "gzip, deflate, compress",
    },
  });
  return {
    name: surah.nama,
    latinName: surah.nama_latin,
    verseCount: surah.jumlah_ayat,
    revelationPlace: surah.tempat_turun,
    meaning: surah.arti,
    description: surah.deskripsi,
    audio: surah.audio,
  }
};

export const getVerses = async (surahNumber: number) => {
  const { data } = await axios.get(
    `https://equran.id/api/surat/${surahNumber}`,
    {
      headers: {
        "Accept-Encoding": "gzip, deflate, compress",
      },
    }
  );

  return data.ayat.map((ayat: any) => {
    return {
      surahId: ayat.surah,
      verse: ayat.nomor,
      arabic: ayat.ar,
      translation: ayat.tr,
      indTranslation: ayat.idn,
    };
  });
};

export const getTafsirs = async (surahNumber: number) => {
  const { data } = await axios.get(
    `https://equran.id/api/tafsir/${surahNumber}`,
    {
      headers: {
        "Accept-Encoding": "gzip, deflate, compress",
      },
    }
  );

  return data.tafsir.map((tafsir: any) => {
    return {
      surahId: tafsir.surah,
      verseId: tafsir.ayat,
      tafsir: tafsir.tafsir,
    };
  });
};