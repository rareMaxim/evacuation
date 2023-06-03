from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in evacuation/__init__.py
from evacuation import __version__ as version

setup(
	name="evacuation",
	version=version,
	description="Керування евакуацією населення",
	author="Maxim Sysoev",
	author_email="maks4a@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
