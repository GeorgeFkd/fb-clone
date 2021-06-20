function SidebarRow({ Icon, text }) {
    return (
        <div className="rounded-md cursor-pointer flex space-x-2 hover:bg-gray-400 h-12 items-center">
            <Icon />
            <p className="text-white font-semibold">{text}</p>
            {/* anti gia sketo text flex-col container and items-center for notifications */}
        </div>
    );
}

export default SidebarRow;
