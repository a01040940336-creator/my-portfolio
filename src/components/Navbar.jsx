import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

const navItems = [
  { label: 'Home',       path: '/' },
  { label: 'About Me',   path: '/about' },
  { label: 'Projects',   path: '/projects' },
]

export default function Navbar() {
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            letterSpacing: 2,
            color: 'var(--color-secondary)',
            textDecoration: 'none',
            fontSize: { xs: '1rem', md: '1.1rem' },
          }}
        >
          PORTFOLIO
        </Typography>

        {isMobile ? (
          <>
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'var(--color-secondary)' }}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <List sx={{ width: 200, pt: 4 }}>
                {navItems.map((item) => (
                  <ListItem key={item.path} disablePadding>
                    <ListItemButton
                      component={Link}
                      to={item.path}
                      onClick={() => setDrawerOpen(false)}
                      selected={location.pathname === item.path}
                      sx={{
                        '&.Mui-selected': { color: 'var(--color-accent)' },
                      }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: isActive ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                    fontWeight: isActive ? 600 : 400,
                    letterSpacing: 0.5,
                    borderBottom: isActive ? '2px solid var(--color-accent)' : '2px solid transparent',
                    borderRadius: 0,
                    px: 2,
                    '&:hover': { color: 'var(--color-accent)', backgroundColor: 'var(--color-primary-light)' },
                  }}
                >
                  {item.label}
                </Button>
              )
            })}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}
