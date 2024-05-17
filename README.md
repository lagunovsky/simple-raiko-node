# Simple raiko node

This project includes a set of scripts and configurations to set up and manage a Raiko instance.

## Prerequisites

- Ubuntu 22.04 with minimum kernel version 5.15
- Intel SGX-enabled CPU
- 2 CPU cores and 8GB memory
- 4GB minimum allocation for the "Enclave Page Cache Size"

More information can be found in the [README_Docker_and_RA.md][readme-docker-and-ra].

[readme-docker-and-ra]: https://github.com/taikoxyz/raiko/blob/taiko/alpha-7/README_Docker_and_RA.md

## Setup

#### 1. Subscribing to Intel PCS Service

To use ECDSA Attestation, you need to subscribe to the [Intel PCS service][intel-pcs-service], following the steps
in [Intel's how-to guide][intel-dcap-install-howto]. After subscribing to the service, you will receive two keys: a primary API key and a secondary API key.

[intel-dcap-install-howto]: https://www.intel.com/content/www/us/en/developer/articles/guide/intel-software-guard-extensions-data-center-attestation-primitives-quick-install-guide.html

[intel-pcs-service]: https://api.portal.trustedservices.intel.com/products#product=liv-intel-software-guard-extensions-provisioning-certification-service

#### 2. Clone the repository

```bash
git clone https://github.com/lagunovsky/simple-raiko-node
```

#### 3. Run the setup script

```bash
cd simple-raiko-node
./manage setup
```

- You may have to log in again. If this happens, just run the command again.
- PCCS password can be left empty if you do not have one.

#### 4. Run the node

```bash
docker compose up -d
```

## Available commands

- `./manage setup`     - prepare, check, configure, and register in one command
- `./manage prepare`   - install dependencies
- `./manage check`     - check FMSPC
- `./manage configure` - generate configuration files (.env, certificates, etc.)
- `./manage register`  - register your node onchain (can be used for re-registration)
- `./manage verify`    - verify that your raiko instance is running properly
