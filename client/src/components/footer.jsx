import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#003C43", color: "#ffffff", padding: "20px 0" }}>
            <Container>
                {/* Adjust the spacing to avoid "sliced" look */}
                <Grid container spacing={3}>
                    {/* About Section with Social Media Icons */}
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" gutterBottom>
                            About
                        </Typography>
                        <Grid container spacing={1}>
                            <Grid item>
                                <Facebook style={{ color: '#ffffff' }} />
                            </Grid>
                            <Grid item>
                                <Twitter style={{ color: '#ffffff' }} />
                            </Grid>
                            <Grid item>
                                <Instagram style={{ color: '#ffffff' }} />
                            </Grid>
                            <Grid item>
                                <YouTube style={{ color: '#ffffff' }} />
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Typography variant="body2">
                            <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
                                FAQs
                            </Link>
                            <br />
                            <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
                                Contact Us
                            </Link>
                        </Typography>
                    </Grid>

                    {/* Helpful Links */}
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" gutterBottom>
                            Helpful Links
                        </Typography>
                        <Typography variant="body2">
                            <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
                                Healthcare Professional
                            </Link>
                            <br />
                            <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
                                LGU Facilities
                            </Link>
                            <br />
                            <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
                                Protect Your Family
                            </Link>
                            <br />
                            <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
                                World Health
                            </Link>
                        </Typography>
                    </Grid>

                    {/* Resources */}
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" gutterBottom>
                            Resources
                        </Typography>
                        <Typography variant="body2">
                            <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
                                WHO Website
                            </Link>
                            <br />
                            <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
                                CDC Website
                            </Link>
                            <br />
                            <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
                                Gov Website
                            </Link>
                            <br />
                            <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
                                DOH Website
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>

                {/* Footer Bottom Text */}
                <Typography variant="body2" align="center" style={{ marginTop: "20px" }}>
                    &copy; {new Date().getFullYear()} Healthcare Management Solutions. All rights reserved.
                </Typography>
            </Container>
        </footer>
    );
}
