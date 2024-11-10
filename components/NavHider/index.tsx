"use client";

// TODO not needed right now

import { ReactNode, useEffect, useState } from "react";

export const NavHider = ({ children }: { children: ReactNode }) => {
	const [hidden, setHidden] = useState(true);

	const onScroll = () => {
		if (window.scrollY !== 0) {
			return setHidden(false);
		}

		setHidden(true);
	};

	useEffect(() => {});

	return <>{hidden && children}</>;
};
