/**
 * TODO: Check if a user is logged in and have an acces to use the admin panel before render
 */

const AdmitLayout = ({ children }: { children: React.ReactNode }): React.ReactNode => {
	return <div>{children}</div>;
};

export default AdmitLayout;
