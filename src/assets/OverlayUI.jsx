function OverlayUI() {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            {/* Your overlay content here */}
            <div style={{ pointerEvents: 'auto' }}>
                {/* Interactive elements here */}
                <button style={{ margin: '10px' }}>Click Me</button>
            </div>
        </div>
    );
}

export { OverlayUI };
