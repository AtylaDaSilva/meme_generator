import { React } from 'react';

export default function TextSidebarComponent(props) { 
    return (
        <li>
            <a
                href="#sidebar-offcanvas-text"
                data-bs-toggle='offcanvas'
                aria-controls='sidebar-offcanvas-text'
                className='nav-link py-3 border-bottom flex-fill'
                aria-current='page'
                role='button'
            >
                <svg
                    id='sidebar-btn-text'
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#ffff"
                    className="bi bi-fonts"
                    viewBox="0 0 16 16"
                >
                    <path d="M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479L12.258 3z"/>
                </svg>
            </a>
            <div
                id='sidebar-offcanvas-text'
                className="offcanvas offcanvas-start"
            >
                <div className="offcanvas-header">
                    <h2 className='offcanvas-title'>Text Tools</h2>
                </div>
                <div className="offcanvas-body">
                    
                </div>
            </div>
        </li>
    );
}