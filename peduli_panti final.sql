-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2023 at 01:06 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `peduli_panti`
--

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `content` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `user_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`id`, `title`, `author`, `description`, `content`, `image`, `createdAt`, `updatedAt`, `user_id`) VALUES
(8, 'Senyuman Kebahagiaan Bersama Adik Panti asuhan Budi Mulia pada acara perdamaian kemanusiaan palestina.', 'Wahyu', 'Kegiatan dimulai dengan doa bersama yang dipanjatkan untuk Palestina, sebuah tindakan kecil yang membawa semangat perdamaian yang kuat. YKB juga memasukkan unsur pendidikan kemanusiaan dalam program ini, yang melibatkan para adik di panti dalam refleksi tentang pentingnya cinta dan kepedulian terhadap sesama. Kami percaya bahwa pendidikan bukan hanya tentang buku dan pengetahuan, tetapi juga tentang membentuk karakter dan moral yang kuat.\r\n\r\nYKB juga menyelenggarakan acara ice breaking dan games yang meriah. Sungguh menggembirakan melihat para adik di Panti asuhan Budi Mulia begitu bersemangat dan antusias dalam mengikuti kegiatan ini. Saat mereka tersenyum dan tertawa, kami merasa bahwa kebahagiaan mereka adalah hadiah yang tak ternilai.\r\n\r\nAcara diakhiri dengan momen puncak, yaitu penyaluran santunan. Santunan ini tidak hanya untuk mendukung pendidikan adik-adik di panti, tetapi juga untuk operasional panti tersebut. Setiap santunan yang diberikan adalah ekspresi dari kepedulian YKB, dari para donatur yang telah mempercayakan YKB untuk menyampaikan bantuan kepada mereka yang membutuhkan.\r\n\r\nTingginya semangat adik-adik di Panti Budi Mulia selama program ini, terutama dalam acara ice breaking dan games, menjadi bukti nyata dari rasa antusiasme mereka. Kami merasa begitu beruntung bisa menjadi bagian dari hari yang penuh tawa dan ceria ini. April, salah satu adik di panti, dengan tulus mengungkapkan rasa terima kasihnya kepada Yayasan Komitmen Bersama. Katanya, “seneng banget karena acaranya seru terus bisa ketemu sama teteh-teteh, bisa belajar bareng juga, terima kasih sudah mau berbagi semoga bisa digantikan yang lebih lagi.” Kata-kata sederhana ini begitu berharga dan mengingatkan kami tentang makna sejati dari kebaikan.', NULL, '1702980889834-article 1.png', '2023-12-19 17:14:49', '2023-12-19 17:14:49', 'DBvFiJBrKbRywKrRlHEX0Hu1lZ12'),
(11, 'Mahasiswa Mengadakan Program Pahlawan Cita untuk Mendukung Kepercayaan Diri dan Cita Anak-Anak', 'Wildan', 'Anak-anak panti Budi Mulia juga memiliki masalah ini. Hal ini menggerakan hati mahasiswa untuk membantu para anak panti untuk mengetahui cara mencapai cita citanya.\r\n\r\nPahlawan Cita merupakan salah satu program yang dicanangkan oleh kreativitas mahasiswa UI dengan beranggotakan Anne Wiratma (FIB 2020), Dhilla Fadiyahsari (FIB 2020), Saphira Rahmadhenia (FIB 2021), Ananda Pipphali Vidya (FK 2021), serta Hegel Aldi Kurniawan (FEB 2022), Program ini berisikan kegiatan yang dapat memicu dan juga meningkatkan pengetahuan anak panti dalam proses mencapai cita-citanya. \r\n\r\nSelain itu, teori konstruktivisme merupakan dasar dari program ini. Teori constructivism dikemukakan oleh Jean Piaget tahun 1964. \r\n\r\nConstructivism adalah teori yang menyatakan bahwa perkembangan pengetahuan anak-anak itu terjadi ketika mereka berinteraksi dengan lingkungan sekitar, melalui pengamatan dan pengalaman, yang kemudian mereka interpretasikan di dalam pikiran mereka.\r\n\r\nProgram Pahlawan Cita terdiri dari empat kegiatan utama: Mentoring, Baca Karya, Crafturday, dan Board Game Pahlawan Cita. \r\n\r\nDalam kegiatan mentoring, mahasiswa mengundang komunitas “Teman Antusias” pada acara pembukaan. Kemudian, mahasiswa membimbing anak-anak untuk semakin mengenal diri mereka melalui diskusi, menggambar cita-cita, dan sharing dengan teman-teman. \r\n\r\nDalam kegiatan Baca Karya, mahasiswa menggandeng komunitas “Berkutubuku” untuk memberi inspirasi. Setelah itu, mahasiswa membimbing anak-anak untuk mempraktikan kepercayaan diri mereka melalui membaca secara lantang serta membuat karya, seperti puisi, cerpen, gambar, dan lain-lain. \r\n\r\nDalam kegiatan Crafturday, wirausahawan muda pendiri Janik.id diundang oleh mahasiswa untuk memotivasi anak-anak dalam berwirausaha. Lalu, mahasiswa membimbing anak-anak untuk membuat karya berupa gelang manik-manik dan gelang simpul yang nantinya bisa dijual oleh anak-anak. ', NULL, '1703078538529-article 2.png', '2023-12-20 20:22:18', '2023-12-20 20:22:18', 'DBvFiJBrKbRywKrRlHEX0Hu1lZ12'),
(12, 'Panti Asuhan Budi Mulia: Rumah bagi Anak-Anak Terlantar.', 'Wahyu', 'Panti Asuhan Budi Mulia adalah oase keberdayaan dan cinta kasih yang berlokasi di indahnya Kota Malang, Jawa Timur. Merupakan lambang kepedulian terhadap anak-anak terlantar, panti asuhan ini lahir dari gagasan dan tekad sekelompok orang berhati mulia pada tahun 2000. Sejak itu, Budi Mulia telah menjadi pelindung bagi anak-anak dari beragam latar belakang, termasuk yatim piatu, anak yang ditinggalkan oleh orang tua, dan keluarga kurang mampu.\r\n\r\nPanti Asuhan Budi Mulia bukan sekadar tempat berteduh, tetapi lebih dari itu, merupakan tempat di mana setiap anak menerima cinta dan perhatian penuh dari para pengasuh yang berdedikasi. Mereka tidak hanya menjadi wali anak-anak ini, tetapi juga menjadi panutan dan teladan dalam setiap langkah perkembangan mereka.\r\n\r\nDalam dakwah kecil ini, Budi Mulia membuktikan bahwa keluarga tidak selalu harus memiliki ikatan darah. Keluarga adalah tempat di mana cinta dan kasih sayang tumbuh, dan itulah yang diusung oleh Panti Asuhan Budi Mulia. Anak-anak dari berbagai latar belakang bersatu di sini, membentuk satu keluarga besar yang saling mendukung dan menguatkan.\r\n\r\nBudi Mulia bukan sekadar tempat berlindung, tetapi rumah yang menyediakan fasilitas lengkap untuk memastikan setiap anak memiliki masa depan yang cerah. Tempat tinggal yang nyaman, makanan bergizi, pakaian layak, pendidikan berkualitas, dan perhatian kesehatan yang kontinu adalah bagian integral dari layanan yang diberikan oleh panti asuhan ini.\r\n\r\nSelain dari segi fisik, Budi Mulia juga berkomitmen untuk mendidik secara holistik. Anak-anak tidak hanya diajarkan ilmu pengetahuan, tetapi juga bimbingan agama untuk membentuk karakter moral yang kuat. Mereka diajak untuk bersosialisasi, berpartisipasi dalam kegiatan keagamaan, dan diberikan ruang untuk mengembangkan bakat dan minat mereka.\r\n\r\nDalam sepuluh belas tahun perjalanannya, Budi Mulia telah menjadi rumah bagi ratusan mimpi. Anak-anak yang tumbuh di sini tidak hanya berkembang menjadi individu yang baik, tetapi juga menjadi agen perubahan positif dalam masyarakat. Panti asuhan ini bukan hanya tempat, tetapi komunitas yang membangun dan menginspirasi, membawa harapan dan keceriaan di setiap sudutnya.\r\n\r\nPanti Asuhan Budi Mulia, sebuah perjalanan penuh cinta dan kepedulian, terus menapaki jejaknya menuju memberikan masa depan yang lebih baik bagi anak-anak terlantar. Keberdayaan bukan hanya tentang memberi, tetapi juga tentang membimbing dan memberdayakan agar setiap anak bisa berdiri dengan tegar di tengah arus kehidupan.', NULL, '1703079618360-bantuan.jpeg', '2023-12-20 20:40:18', '2023-12-20 20:40:18', 'DBvFiJBrKbRywKrRlHEX0Hu1lZ12'),
(13, 'Panti Asuhan Budi Mulia: Tempat Mencetak Generasi Berkarakter', 'Wahyu', 'Panti Asuhan Budi Mulia tidak hanya menjalankan tugasnya sebagai penyedia tempat tinggal dan pemenuhan kebutuhan dasar bagi anak-anak asuhnya. Lebih dari itu, panti asuhan ini berkomitmen untuk mendidik dan membentuk karakter anak-anak agar mampu bersaing dan berkembang dalam kehidupan.\r\n\r\nAnak-anak di Panti Asuhan Budi Mulia diajarkan untuk menjadi individu yang disiplin, mandiri, dan bertanggung jawab. Ini tidak hanya tentang kurikulum formal, tetapi juga pembelajaran sehari-hari yang diterapkan dalam kehidupan sehari-hari di panti asuhan ini. Setiap anak diajak untuk memahami arti tanggung jawab terhadap diri sendiri, lingkungan sekitar, dan masyarakat.\r\n\r\nPentingnya nilai-nilai agama dan Pancasila diakui sebagai fondasi utama dalam membentuk karakter anak-anak. Melalui kegiatan keagamaan, anak-anak diajak untuk lebih mengenal agamanya, berdoa, dan mengamalkan ajaran agama dalam kehidupan sehari-hari. Selain itu, nilai-nilai luhur Pancasila juga diintegrasikan sebagai landasan moral yang membimbing perilaku dan sikap positif.\r\n\r\nPanti Asuhan Budi Mulia menyadari bahwa pembelajaran karakter tidak hanya terjadi di ruang kelas formal. Oleh karena itu, mereka merancang berbagai kegiatan ekstrakurikuler yang tidak hanya mendukung perkembangan akademis tetapi juga aspek sosial dan emosional anak-anak. Mulai dari seni, olahraga, hingga kegiatan sosial, setiap aktivitas diarahkan untuk mengasah potensi dan membentuk karakter anak-anak.\r\n\r\nPara pengasuh di Panti Asuhan Budi Mulia menjadi pilar utama dalam membentuk karakter anak-anak asuh. Mereka bukan hanya sekadar pengawas, tetapi figur yang memberikan teladan positif. Dengan memberikan motivasi, mendengarkan, dan memberikan arahan, para pengasuh membimbing setiap anak untuk menemukan potensi terbaik dalam diri mereka.\r\n\r\nDengan pendekatan holistik ini, Panti Asuhan Budi Mulia berharap dapat membentuk anak-anak asuhnya menjadi generasi yang lebih baik. Mereka tidak hanya siap menghadapi tantangan dunia luar tetapi juga memiliki komitmen untuk berkontribusi dalam membangun masyarakat. Melalui pendidikan karakter yang mendalam, Panti Asuhan Budi Mulia membuktikan bahwa kepedulian sejati tidak hanya memberi, tetapi juga membimbing dan memberdayakan untuk mencapai potensi tertinggi setiap anak.', NULL, '1703079838923-article 3.png', '2023-12-20 20:43:58', '2023-12-20 20:43:58', 'DBvFiJBrKbRywKrRlHEX0Hu1lZ12'),
(14, 'Membuka Pintu Kebaikan: Ajaklah Masyarakat Untuk Bersatu Dalam Dukungan Panti Asuhan Budi Mulia', 'Wildan', 'Panti Asuhan Budi Mulia, meskipun telah berjuang keras dalam memberikan cinta dan perhatian kepada anak-anak terlantar, masih memerlukan sentuhan kebaikan dari masyarakat. Dukungan yang tulus dari masyarakat menjadi pondasi utama kelancaran operasional panti asuhan ini. Bersama, kita dapat membuka pintu kebaikan dan memberikan kontribusi nyata bagi masa depan anak-anak yang menjadi bagian dari Budi Mulia.\r\n\r\nDukungan yang dapat diberikan kepada Panti Asuhan Budi Mulia sangatlah beragam dan dapat disesuaikan dengan kemampuan serta minat masing-masing individu. Salah satu bentuk dukungan yang paling vital adalah bantuan dana. Dana yang terkumpul dapat diarahkan untuk memenuhi kebutuhan dasar anak-anak, seperti biaya pendidikan, kesehatan, dan kebutuhan sehari-hari.\r\n\r\nSelain bantuan dana, kontribusi dalam bentuk barang juga sangat berarti. Pakaian layak, makanan bergizi, dan perlengkapan sehari-hari dapat memberikan kesejahteraan bagi anak-anak asuhan. Setiap sumbangan barang memiliki dampak positif dalam menjaga keseimbangan kehidupan di panti asuhan.\r\n\r\nBukan hanya dalam bentuk materi, dukungan masyarakat dapat diwujudkan melalui bantuan tenaga. Tenaga sukarelawan yang berdedikasi dapat membantu melaksanakan berbagai kegiatan di panti asuhan. Mulai dari kegiatan pendidikan, pengembangan bakat, hingga bimbingan emosional, setiap sumbangan tenaga akan memberikan warna dan kehangatan tersendiri dalam perjalanan anak-anak di Panti Asuhan Budi Mulia.\r\n\r\nDukungan masyarakat terhadap Panti Asuhan Budi Mulia bukanlah sekadar tindakan, tetapi pula bentuk investasi pada masa depan generasi penerus bangsa. Masyarakat yang peduli dan turut berkontribusi akan membantu membentuk anak-anak asuhan menjadi pribadi yang berdaya, memiliki mimpi, dan percaya bahwa mereka memiliki tempat di dunia ini.\r\n\r\nDalam kebersamaan memberikan dukungan, kita membuka pintu bagi harapan. Harapan untuk masa depan cerah, di mana anak-anak asuhan dapat tumbuh dan berkembang menjadi individu yang memiliki peran positif dalam masyarakat. Dengan dukungan yang berkelanjutan, Panti Asuhan Budi Mulia dapat menjadi wahana bagi anak-anak untuk mengejar mimpi dan meraih kesuksesan.\r\n\r\nMari bersatu dalam kebaikan, ajaklah masyarakat untuk meresapi pentingnya peran mereka dalam menjaga dan mendukung Panti Asuhan Budi Mulia. Sebab, hanya bersama, kita dapat mewujudkan perubahan nyata dan memberikan arti pada setiap langkah kecil kebaikan yang kita lakukan.', NULL, '1703080152626-article 4.png', '2023-12-20 20:49:12', '2023-12-20 20:49:12', 'DBvFiJBrKbRywKrRlHEX0Hu1lZ12'),
(15, 'Panti Asuhan Muslimin: Rumah bagi Anak-Anak Terlantar.', 'Asep', 'Panti Asuhan Muslimin adalah salah satu panti asuhan yang terletak di Kuningan, Jawa Barat. Panti asuhan ini didirikan pada tahun 2000 oleh sekelompok orang yang peduli terhadap anak-anak terlantar.\r\n\r\nPanti Asuhan Muslimin menampung anak-anak dari berbagai latar belakang, mulai dari anak yatim piatu, anak yang ditelantarkan oleh orang tua, hingga anak dari keluarga miskin. Anak-anak di panti asuhan ini diasuh oleh para pengasuh yang berdedikasi dan penuh kasih sayang.\r\n\r\nPanti Asuhan Muslimin menyediakan berbagai macam fasilitas untuk anak-anak asuhnya, mulai dari tempat tinggal, makanan, pakaian, pendidikan, hingga kesehatan. Anak-anak di panti asuhan ini juga dibimbing untuk belajar agama, bersosialisasi, dan mengembangkan bakat mereka.\r\n\r\nPanti Asuhan Muslimin telah menjadi rumah bagi ratusan anak-anak terlantar. Panti asuhan ini telah membantu anak-anak tersebut untuk tumbuh dan berkembang menjadi pribadi yang baik dan berguna bagi masyarakat.\r\n\r\nAnak-Anak dari Berbagai Latar Belakang\r\n\r\nPanti Asuhan Muslimin menampung anak-anak dari berbagai latar belakang. Ada anak yatim piatu yang orang tuanya meninggal dunia, ada anak yang ditelantarkan oleh orang tua, dan ada anak dari keluarga miskin yang tidak mampu membiayai pendidikan dan kebutuhan sehari-hari mereka.\r\n\r\nAnak-anak di panti asuhan ini berasal dari berbagai daerah di Indonesia. Mereka memiliki berbagai macam suku, agama, dan budaya. Namun, mereka semua bersatu dan hidup rukun di panti asuhan ini.\r\n\r\nPengasuh yang Berdedikasi\r\n\r\nPanti Asuhan Muslimin memiliki para pengasuh yang berdedikasi dan penuh kasih sayang. Para pengasuh ini merawat dan mendidik anak-anak asuhan dengan penuh kasih sayang.\r\n\r\nPara pengasuh ini selalu berusaha untuk memberikan yang terbaik bagi anak-anak asuhan. Mereka memberikan perhatian dan kasih sayang kepada anak-anak asuhan. Mereka juga mendidik anak-anak asuhan dengan penuh kesabaran dan ketelatenan.\r\n\r\nFasilitas yang Lengkap\r\n\r\nPanti Asuhan Muslimin menyediakan berbagai macam fasilitas untuk anak-anak asuhnya, mulai dari tempat tinggal, makanan, pakaian, pendidikan, hingga kesehatan.\r\n\r\nAnak-anak asuhan di panti ini tinggal di asrama yang nyaman dan bersih. Mereka mendapatkan makanan yang bergizi dan sehat. Mereka juga mendapatkan pakaian yang layak dan kebutuhan sehari-hari lainnya.\r\n\r\nAnak-anak asuhan di panti ini juga mendapatkan pendidikan yang layak. Mereka disekolahkan di sekolah-sekolah umum atau sekolah agama. Mereka juga mendapatkan bimbingan belajar untuk membantu mereka dalam belajar.\r\n\r\nAnak-anak asuhan di panti ini juga mendapatkan pelayanan kesehatan yang memadai. Mereka mendapatkan pemeriksaan kesehatan secara rutin dan mendapatkan pengobatan jika sakit.\r\n\r\nPendidikan Agama dan Budaya\r\n\r\nAnak-anak asuhan di Panti Asuhan Muslimin juga dibimbing untuk belajar agama dan budaya. Mereka diajarkan tentang ajaran Islam dan nilai-nilai luhur budaya Indonesia.\r\n\r\nAnak-anak asuhan di panti ini juga dibimbing untuk bersosialisasi dan mengembangkan bakat mereka. Mereka diajarkan untuk hidup rukun dan saling menghormati. Mereka juga didorong untuk mengembangkan bakat dan minat mereka.\r\n\r\nPanti Asuhan Muslimin: Harapan bagi Anak-Anak Terlantar\r\n\r\nPanti Asuhan Muslimin adalah harapan bagi anak-anak terlantar untuk mendapatkan kehidupan yang lebih baik. Panti asuhan ini memberikan kesempatan kepada anak-anak tersebut untuk tumbuh dan berkembang menjadi pribadi yang berdaya.\r\n\r\nAnak-anak di panti asuhan ini memiliki kesempatan untuk mendapatkan pendidikan yang layak, keterampilan, dan pengalaman kerja. Mereka juga memiliki kesempatan untuk mengembangkan bakat dan minat mereka.\r\n\r\nPanti Asuhan Muslimin telah membantu banyak anak terlantar untuk meraih mimpi mereka. Banyak anak yang telah berhasil menyelesaikan pendidikan, mendapatkan pekerjaan, dan mandiri.\r\n\r\nDukungan Masyarakat\r\n\r\nPanti Asuhan Muslimin masih membutuhkan dukungan dari masyarakat. Dukungan tersebut sangat diperlukan untuk kelancaran operasional panti asuhan ini.\r\n\r\nDukungan yang dapat diberikan kepada Panti Asuhan Muslimin sangat beragam, mulai dari bantuan dana, barang, hingga tenaga. Bantuan dana dapat digunakan untuk memenuhi kebutuhan dasar anak-anak asuhan, seperti biaya pendidikan, kesehatan, dan kebutuhan sehari-hari. Bantuan barang dapat berupa pakaian, makanan, dan perlengkapan lainnya. Bantuan tenaga dapat berupa tenaga sukarelawan yang dapat membantu dalam berbagai kegiatan di panti asuhan.\r\n\r\nDukungan masyarakat terhadap Panti Asuhan Muslimin sangat berarti bagi anak-anak asuhan. Dukungan tersebut dapat membantu anak-anak tersebut untuk tumbuh dan berkembang menjadi pribadi yang berdaya.', NULL, '1703111712138-article 6.jpg', '2023-12-21 05:35:12', '2023-12-21 05:35:12', 'xKhyelokGkb5f1LkKL9G4XCheBf1');

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `id` int(11) NOT NULL,
  `nama_panti` varchar(255) DEFAULT NULL,
  `notelp_panti` varchar(255) DEFAULT NULL,
  `nama_pengurus` varchar(255) DEFAULT NULL,
  `nama_pemilik` varchar(255) DEFAULT NULL,
  `notelp_pemilik` varchar(255) DEFAULT NULL,
  `deskripsi_panti` varchar(255) DEFAULT NULL,
  `alamat_panti` varchar(255) DEFAULT NULL,
  `provinsi` varchar(255) DEFAULT NULL,
  `kabupaten` varchar(255) DEFAULT NULL,
  `kecamatan` varchar(255) DEFAULT NULL,
  `program_panti` varchar(255) DEFAULT NULL,
  `deskripsi_program` varchar(255) DEFAULT NULL,
  `kebutuhan_panti` varchar(255) DEFAULT NULL,
  `deskripsi_kebutuhan` varchar(255) DEFAULT NULL,
  `jumlah_pengurus` varchar(255) DEFAULT NULL,
  `jumlah_anaklaki` varchar(255) DEFAULT NULL,
  `jumlah_anakpr` varchar(255) DEFAULT NULL,
  `jumlah_anak` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `user_id` varchar(255) NOT NULL,
  `sertifikat_panti` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`id`, `nama_panti`, `notelp_panti`, `nama_pengurus`, `nama_pemilik`, `notelp_pemilik`, `deskripsi_panti`, `alamat_panti`, `provinsi`, `kabupaten`, `kecamatan`, `program_panti`, `deskripsi_program`, `kebutuhan_panti`, `deskripsi_kebutuhan`, `jumlah_pengurus`, `jumlah_anaklaki`, `jumlah_anakpr`, `jumlah_anak`, `image`, `createdAt`, `updatedAt`, `user_id`, `sertifikat_panti`) VALUES
(18, 'Panti Asuhan Budi Mulia', '08123456789', NULL, 'Budi Mulia', '08765432123', 'Panti asuhan yang peduli terhadap pendidikan dan kesejahteraan anak-anak.', 'Jl. Harapan Indah No. 123, Kota Indah', 'jawa timur', 'kota malang', 'lowokwaru', 'Mengaji, Olahraga, Kegiatan sosial', NULL, 'Beras, susu, pakaian, buku', 'Membutuhkan bantuan berupa beras, susu, pakaian, dan buku untuk mendukung \r\nkegiatan sehari-hari anak-anak.', '10', '30', '25', NULL, '1703074544216-article 1.png', '2023-12-20 19:15:44', '2023-12-20 19:15:44', 'DBvFiJBrKbRywKrRlHEX0Hu1lZ12', '1703076805084-sertifikat-panti.jpg'),
(19, 'Panti Asuhan Muslimin', '6281234543221', NULL, 'Asep', '6282312345678', 'Panti kami berdiri di kota kuningan sejak 2020.', 'jl. cirabak nanjak, desa lengkong, kecamatan garawangi', 'jawa barat', 'kabupaten kuningan', 'garawangi', 'menghafal alquran, olahraga, kegiatan sosial', NULL, 'beras, buku, dan alquran', 'beasiswa quran untuk penghapal al-quran', '5', '7', '4', NULL, '1703111539429-panti muslimin.jpg', '2023-12-21 05:32:19', '2023-12-21 05:32:19', 'xKhyelokGkb5f1LkKL9G4XCheBf1', NULL),
(20, 'Panti Asuhan Roudlotul Jannah', '087856781234', NULL, 'Ibu Ratna Sari', '081234567890', 'Panti Anak Bahagia adalah tempat di mana anak-anak yatim, terlantar, dan kurang beruntung mendapatkan kasih sayang, pendidikan, dan bimbingan untuk membangun masa depan yang cerah.', 'Jl. Harapan Indah No. 789, Kelurahan Ceria, Kota Sejahtera', 'jawa tengah', 'kabupaten wonogiri', 'giritontro', 'Program Unggulan \"Tumbuh Berkarakter\"', NULL, 'Donasi bahan makanan, pakaian, perlengkapan sekolah, dana operasional untuk keberlangsungan aktivitas sehari-hari.', 'Kami membutuhkan dukungan berupa donasi bahan makanan, pakaian layak pakai, buku, dan perlengkapan sekolah untuk memenuhi kebutuhan anak-anak di panti. Bantuan dana operasional juga sangat penting untuk menjaga kelangsungan program dan kehidupan sehari-ha', '6', '18', '15', NULL, '1703112111372-panti roudhotul.jpeg', '2023-12-21 05:41:51', '2023-12-21 05:41:51', 'fBwRZrhjtyNw7Vcwb8Yg3roYhwd2', NULL),
(21, 'Panti Asuhan Kasih Ceria', '082123456789', NULL, 'Bapak Iwan Susanto', '081598764321', 'Panti Asuhan Kasih Ceria adalah tempat yang memberikan cinta dan perhatian kepada anak-anak yatim piatu serta mereka yang membutuhkan kasih sayang dan bimbingan.', 'Jl. Bahagia No. 456 Kelurahan Sejahtera', 'jawa timur', 'kabupaten sidoarjo', 'prambon', 'Program Unggulan \"Mendidik Anak Cerdas\"', NULL, 'Donasi makanan, bantuan pakaian, peralatan sekolah, dana untuk keperluan operasional sehari-hari.', 'Program Unggulan \"Mendidik Anak Cerdas\"', '10', '20', '17', NULL, '1703113170388-panti kasih ceria.jpeg', '2023-12-21 05:59:30', '2023-12-21 05:59:30', 'ds0nvYTbDWVlQ5FMVIGi1nFQ3rm2', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `username`) VALUES
('DBvFiJBrKbRywKrRlHEX0Hu1lZ12', 'panti@gmail.com', 'wahyu'),
('ds0nvYTbDWVlQ5FMVIGi1nFQ3rm2', 'panti4@gmail.com', 'panti4'),
('fBwRZrhjtyNw7Vcwb8Yg3roYhwd2', 'panti3@gmail.com', 'panti3'),
('xKhyelokGkb5f1LkKL9G4XCheBf1', 'pnati@gmail.com', 'panti2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_article_user_id` (`user_id`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_profile_user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `fk_article_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `profile`
--
ALTER TABLE `profile`
  ADD CONSTRAINT `fk_profile_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
