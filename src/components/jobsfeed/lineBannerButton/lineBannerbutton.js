import { Link } from 'react-router-dom';
import './lineBannerButton.scss';

const LineBannerButton = () => {
    return (
        <aside className="line-banner-aside">
            <Link to="/wdlist/0/0">
                <div className="line-banner-box">
                    <div className="line-banner-button" >
                        <svg width="28" height="28" viewBox="0 0 28 28" xmlns="https://www.w3.org/2000/svg" style={{ color: "rgb(255, 255, 255)" }}><defs><path d="M24.465 25.702a.875.875 0 0 0 1.237-1.237L18.12 16.88l-.296-.257a.875.875 0 0 0-1.187.043 7.876 7.876 0 1 1 1.96-3.216.875.875 0 0 0 1.67.525c.292-.93.442-1.902.442-2.893a9.625 9.625 0 0 0-9.625-9.625 9.625 9.625 0 0 0-9.625 9.625c0 5.315 4.31 9.625 9.625 9.625a9.589 9.589 0 0 0 6.161-2.23l7.22 7.224z" id="jobsfeed_shortcut_search_a"></path></defs><g fill="none" fillRule="evenodd"><mask id="jobsfeed_shortcut_search_b" fill="#fff"><use xlinkHref="#jobsfeed_shortcut_search_a"></use></mask><use fill="none" fillRule="nonzero" xlinkHref="#jobsfeed_shortcut_search_b"></use><g mask="url(#jobsfeed_shortcut_search_b)" fill="currentColor"><path d="M0 0h28v28H0z"></path></g></g></svg>
                        채용 중인 포지션 보러가기
                    </div>
                </div>
            </Link>
        </aside>
    )
}

export default LineBannerButton;