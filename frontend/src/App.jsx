import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { RootLayout, RootLayoutAdmin, RootLayoutLogin } from "./routes";

import { PrivateRoute } from "./components";

import {
  Beranda,
  CariPanti,
  TentangKami,
  Login,
  KabarPanti,
  KabarPanti2,
  DetailPanti,
  KonfirmasiUang,
  KonfirmasiBarang,
  Daftar,
  Relawan,
} from "./pages";

import {
  Dashboard,
  DonasiMasuk,
  Notifikasi,
  StatusPanti,
  KabarPantiList,
  BuatKabarPanti,
} from "./pages/Admin";

import { AuthProvider } from "./context/AuthContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Beranda />} index />
        <Route path="cari-panti" element={<CariPanti />} />
        <Route path="cari-panti/panti/:idPanti" element={<DetailPanti />} />
        <Route path="tentang-kami" element={<TentangKami />} />
        <Route path="kabar-panti" element={<KabarPanti />} />
        <Route path="kabar-panti/:idArticle" element={<KabarPanti2 />} />
        <Route path="konfirmasi-uang" element={<KonfirmasiUang />} />
        <Route path="konfirmasi-barang" element={<KonfirmasiBarang />} />
        <Route path="relawan" element={<Relawan />} />
      </Route>
      <Route element={<RootLayoutLogin />}>
        <Route path="login" element={<Login />} />
        <Route path="daftar" element={<Daftar />} />
      </Route>
      <Route
        element={
          <PrivateRoute>
            <RootLayoutAdmin />
          </PrivateRoute>
        }
      >
        <Route path="profile" element={<Dashboard />} />
        <Route path="status-panti" element={<StatusPanti />} />
        <Route path="donasi-masuk" element={<DonasiMasuk />} />
        <Route path="kabar-panti-admin" element={<KabarPantiList />} />
        <Route path="kabar-panti-admin/buat" element={<BuatKabarPanti />} />
        <Route path="notifikasi" element={<Notifikasi />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />;
    </AuthProvider>
  );
}

export default App;
