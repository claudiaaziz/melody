import { Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/SessionForms/SignupFormPage';
import LoginFormPage from './components/SessionForms/LoginFormPage';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import Playbar from './components/Playbar';
import PlaylistShowPage from './components/Playlists/PlaylistShow';
import SearchAlbums from './components/SearchAlbums';
import AlbumIndex from './components/Albums/AlbumIndex';
import AlbumShow from './components/Albums/AlbumShow';
import PageNotFound from './components/PageNotFound';
import { AuthRoute } from './components/Routes/Routes';
import Modal from './components/Modal';

const App = () => {
    return (
        <>
            <Modal />
            <Switch>
                <Route path='/' exact>
                    <Navbar />
                    <SideMenu />
                    <Playbar />
                    <AlbumIndex />
                </Route>
                <AuthRoute path='/login' component={LoginFormPage} />
                <AuthRoute path='/signup' component={SignupFormPage} />
                <Route path='/search' exact>
                    <Navbar />
                    <SideMenu />
                    <Playbar />
                    <SearchAlbums />
                </Route>
                <Route path='/albums/:albumId'>
                    <Navbar />
                    <SideMenu />
                    <Playbar />
                    <AlbumShow />
                </Route>
                <Route path='/playlists/:playlistId'>
                    <Navbar />
                    <SideMenu />
                    <Playbar />
                    <PlaylistShowPage />
                </Route>
                <Route path='/page-not-found'>
                    <PageNotFound />
                </Route>
                <Route>
                    <PageNotFound />
                </Route>
            </Switch>
        </>
    );
};

export default App;
