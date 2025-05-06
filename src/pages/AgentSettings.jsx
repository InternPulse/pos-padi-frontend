import React, { useState, useEffect } from "react";
import {
  Tabs,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Input,
  Grid,
  Button,
  Table,
  Switch,
  Popover,
  VStack,
  HStack,
  Badge,
  Progress,
  Dialog,
  Portal,
} from "@chakra-ui/react";
import {
  FaUserEdit,
  FaTrash,
  FaDesktop,
  FaMobile,
  FaTablet,
  FaInfoCircle,
  FaStar,
  FaBan,
  FaHistory,
} from "react-icons/fa";
import { LuUsers, LuUpload } from "react-icons/lu";

function Settings() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    businessName: "John Doe Enterprises",
    address: "123 Main St, Lagos",
    lga: "Lagos Main",
    state: "Lagos State",
  });
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);
  const [deviceToRemove, setDeviceToRemove] = useState(null);
  const [primaryDevice, setPrimaryDevice] = useState("MacBook Pro"); // Default primary device
  const [showNotification, setShowNotification] = useState(false);
  const [notification, setNotification] = useState({
    title: "",
    description: "",
    type: "success",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    if (!isEditing) return;
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const showNotificationDialog = (title, description, type = "success") => {
    setNotification({ title, description, type });
    setShowNotification(true);
  };

  const handleImageUpload = async () => {
    if (!selectedImage) return;

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          showNotificationDialog(
            "Image uploaded successfully",
            "Your profile image has been updated"
          );
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleRemoveDevice = (device) => {
    setDeviceToRemove(device);
    setShowRemoveConfirm(true);
  };

  const confirmRemoveDevice = () => {
    console.log("Removing device:", deviceToRemove);
    showNotificationDialog(
      "Device removed",
      `${deviceToRemove.deviceName} has been removed from your account`
    );
    setShowRemoveConfirm(false);
    setDeviceToRemove(null);
  };

  const handleSetPrimaryDevice = (deviceName) => {
    setPrimaryDevice(deviceName);
    showNotificationDialog(
      "Primary device updated",
      `${deviceName} is now your primary device`
    );
  };

  const getDeviceIcon = (deviceName) => {
    const lowerName = deviceName.toLowerCase();
    if (
      lowerName.includes("mac") ||
      lowerName.includes("windows") ||
      lowerName.includes("pc")
    ) {
      return <FaDesktop />;
    } else if (lowerName.includes("iphone") || lowerName.includes("android")) {
      return <FaMobile />;
    } else if (lowerName.includes("ipad") || lowerName.includes("tablet")) {
      return <FaTablet />;
    }
    return <FaDesktop />;
  };

  // Mock data for device sessions
  const deviceSessions = [
    {
      deviceName: "MacBook Pro",
      location: "Lagos, Nigeria",
      signedInVia: "Chrome Browser",
      dateTime: "Mar 15, 2024, 10:30 AM",
      action: "Active",
    },
    {
      deviceName: "iPhone 13",
      location: "Abuja, Nigeria",
      signedInVia: "Safari Browser",
      dateTime: "Mar 14, 2024, 02:15 PM",
      action: "Active",
    },
    {
      deviceName: "Windows PC",
      location: "Port Harcourt, Nigeria",
      signedInVia: "Firefox Browser",
      dateTime: "Mar 13, 2024, 09:45 AM",
      action: "Active",
    },
    {
      deviceName: "Samsung Galaxy",
      location: "Ibadan, Nigeria",
      signedInVia: "Chrome Browser",
      dateTime: "Mar 12, 2024, 11:20 AM",
      action: "Active",
    },
  ];

  return (
    <Tabs.Root
      p={{ base: 0, "2xl": 6 }}
      defaultValue="Personal Information"
      width="100%"
      css={{
        '& [data-state="active"]': {
          borderBottom: "2px solid",
          borderColor: { base: "green.500", _dark: "green.300" },
          color: { base: "green.500", _dark: "green.300" },
        },
        '& [role="tablist"]': {
          borderBottom: "2px solid",
          borderColor: { base: "gray.200", _dark: "gray.600" },
        },
        '& [role="tab"]': {
          borderBottom: "2px solid transparent",
          _selected: {
            borderBottom: "2px solid",
            borderColor: { base: "green.500", _dark: "green.300" },
            color: { base: "green.500", _dark: "green.300" },
          },
          color: { base: "#626C7A", _dark: "gray.300" },
          fontSize: { base: "0.75rem", md: "0.875rem", lg: "1rem" },
          px: { base: 2, md: 4 },
        },
      }}
    >
      <Tabs.List
        border="1px solid"
        borderColor={{ base: "gray.200", _dark: "gray.600" }}
        borderRadius="md"
        p={{ base: 6, md: 4 }}
        display="flex"
        flexWrap="nowrap"
        justifyContent={{ base: "flex-start", md: "space-between" }}
        width="100%"
        mb={4}
        mt={8}
        bg={{ base: "white", _dark: "inherit" }}
        gap={{ base: 8, md: 0 }}
        overflowX="auto"
        css={{
          "&::-webkit-scrollbar": {
            height: "4px",
          },
          "&::-webkit-scrollbar-track": {
            background: { base: "gray.100", _dark: "gray.700" },
            borderRadius: "2px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: { base: "gray.300", _dark: "gray.500" },
            borderRadius: "2px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: { base: "gray.400", _dark: "gray.400" },
          },
        }}
      >
        <Tabs.Trigger
          value="Personal Information"
          _hover={{ color: { base: "green.500", _dark: "green.300" } }}
          _selected={{ color: { base: "green.500", _dark: "green.300" } }}
          color={{ base: "#626C7A", _dark: "gray.300" }}
          px={{ base: 4, md: 4 }}
          py={{ base: 2, md: 2 }}
          whiteSpace="nowrap"
          minW="fit-content"
        >
          Personal Information
        </Tabs.Trigger>
        <Tabs.Trigger
          value="Business Information"
          _hover={{ color: { base: "green.500", _dark: "green.300" } }}
          _selected={{ color: { base: "green.500", _dark: "green.300" } }}
          color={{ base: "#626C7A", _dark: "gray.300" }}
          px={{ base: 4, md: 4 }}
          py={{ base: 2, md: 2 }}
          whiteSpace="nowrap"
          minW="fit-content"
        >
          Business Information
        </Tabs.Trigger>
        <Tabs.Trigger
          value="Notifications"
          _hover={{ color: { base: "green.500", _dark: "green.300" } }}
          _selected={{ color: { base: "green.500", _dark: "green.300" } }}
          color={{ base: "#626C7A", _dark: "gray.300" }}
          px={{ base: 4, md: 4 }}
          py={{ base: 2, md: 2 }}
          whiteSpace="nowrap"
          minW="fit-content"
        >
          Notifications
        </Tabs.Trigger>
        <Tabs.Trigger
          value="Terminal"
          _hover={{ color: { base: "green.500", _dark: "green.300" } }}
          _selected={{ color: { base: "green.500", _dark: "green.300" } }}
          color={{ base: "#626C7A", _dark: "gray.300" }}
          px={{ base: 4, md: 4 }}
          py={{ base: 2, md: 2 }}
          whiteSpace="nowrap"
          minW="fit-content"
        >
          Terminal
        </Tabs.Trigger>
      </Tabs.List>

      <Box width="100%" maxW="1400px" mx="auto" mt={8} px={{ base: 4, md: 8 }}>
        <Tabs.Content value="Personal Information">
          <Box
            border="1px solid"
            borderColor={{ base: "gray.200", _dark: "gray.600" }}
            borderRadius="md"
            p={{ base: 4, md: 8 }}
            bg={{ base: "white", _dark: "inherit" }}
            minH={{ base: "auto", md: "600px" }}
          >
            <Flex
              justify="space-between"
              align="center"
              mb={6}
              direction={{ base: "column", md: "row" }}
              gap={4}
            >
              <Box textAlign={{ base: "center", md: "left" }}>
                <Heading
                  as="h1"
                  size={{ base: "md", md: "lg" }}
                  mb={2}
                  color={{ base: "#626C7A", _dark: "gray.300" }}
                >
                  Personal Information
                </Heading>
                <Text
                  color={{ base: "#626C7A", _dark: "gray.300" }}
                  fontSize={{ base: "sm", md: "md" }}
                  mb={4}
                >
                  This information will be displayed so be careful what you
                  share
                </Text>
                <Popover.Root>
                  <Popover.Trigger>
                    <IconButton
                      aria-label="Upload profile image"
                      icon={<LuUsers />}
                      color={{ base: "green.500", _dark: "green.300" }}
                      bg={{ base: "white", _dark: "inherit" }}
                      border="1px solid"
                      borderColor={{ base: "green.500", _dark: "green.300" }}
                      _hover={{ bg: { base: "green.50", _dark: "green.900" } }}
                      size="lg"
                      borderRadius="full"
                      width="60px"
                      height="60px"
                    />
                  </Popover.Trigger>
                  <Popover.Positioner>
                    <Popover.Content>
                      <Popover.Arrow>
                        <Popover.ArrowTip />
                      </Popover.Arrow>
                      <Popover.Body>
                        <Popover.Title>Upload Profile Image</Popover.Title>
                        <VStack spacing={3} align="stretch">
                          {imagePreview && (
                            <Box
                              w="100%"
                              h="100px"
                              borderRadius="md"
                              overflow="hidden"
                              border="1px solid"
                              borderColor={{
                                base: "gray.200",
                                _dark: "gray.600",
                              }}
                              position="relative"
                            >
                              <img
                                src={imagePreview}
                                alt="Preview"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                              <Button
                                size="xs"
                                position="absolute"
                                top={2}
                                right={2}
                                onClick={() => {
                                  setSelectedImage(null);
                                  setImagePreview(null);
                                }}
                              >
                                Clear
                              </Button>
                            </Box>
                          )}
                          <Box
                            border="2px dashed"
                            borderColor={{
                              base: "gray.200",
                              _dark: "gray.600",
                            }}
                            borderRadius="md"
                            p={4}
                            textAlign="center"
                            cursor="pointer"
                            _hover={{
                              borderColor: {
                                base: "green.500",
                                _dark: "green.300",
                              },
                            }}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={(e) => {
                              e.preventDefault();
                              const file = e.dataTransfer.files[0];
                              if (
                                file &&
                                (file.type === "image/jpeg" ||
                                  file.type === "image/png")
                              ) {
                                handleImageChange({
                                  target: { files: [file] },
                                });
                              } else {
                                showNotificationDialog(
                                  "Invalid file type",
                                  "Please upload a JPG or PNG image"
                                );
                              }
                            }}
                          >
                            <LuUpload
                              size={24}
                              style={{ margin: "0 auto 8px" }}
                            />
                            <Text fontSize="sm">
                              Drag & drop or click to upload
                            </Text>
                            <Text fontSize="xs" color="gray.500">
                              Max file size: 5MB
                            </Text>
                            <Text fontSize="xs" color="gray.500">
                              Supported: JPG, PNG
                            </Text>
                          </Box>
                          <input
                            type="file"
                            accept="image/jpeg,image/png"
                            onChange={handleImageChange}
                            style={{ display: "none" }}
                            id="image-upload"
                          />
                          {isUploading ? (
                            <VStack spacing={2}>
                              <Progress
                                value={uploadProgress}
                                size="sm"
                                width="100%"
                                colorScheme="green"
                              />
                              <Text fontSize="xs">
                                Uploading... {uploadProgress}%
                              </Text>
                            </VStack>
                          ) : (
                            <Button
                              size="sm"
                              colorPalette="green"
                              width="100%"
                              onClick={() =>
                                document.getElementById("image-upload").click()
                              }
                              isDisabled={!selectedImage}
                            >
                              Upload Image
                            </Button>
                          )}
                        </VStack>
                      </Popover.Body>
                    </Popover.Content>
                  </Popover.Positioner>
                </Popover.Root>
              </Box>
              <Button
                leftIcon={
                  <FaUserEdit
                    color={{ base: "green.500", _dark: "green.300" }}
                  />
                }
                color={{ base: "green.500", _dark: "green.300" }}
                bg={{ base: "white", _dark: "inherit" }}
                border="1px solid"
                borderColor={{ base: "green.500", _dark: "green.300" }}
                _hover={{ bg: { base: "green.50", _dark: "green.900" } }}
                onClick={handleEditClick}
                size={{ base: "sm", md: "md" }}
                width={{ base: "100%", md: "auto" }}
              >
                {isEditing ? "Save Changes" : "Edit Profile"}
              </Button>
            </Flex>

            <Box
              border="1px solid"
              borderColor={{ base: "gray.200", _dark: "gray.600" }}
              borderRadius="md"
              p={{ base: 4, md: 8 }}
            >
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                gap={{ base: 4, md: 8 }}
              >
                <Box>
                  <Text
                    mb={2}
                    fontWeight="medium"
                    color={{ base: "#626C7A", _dark: "gray.300" }}
                  >
                    First Name
                  </Text>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    isDisabled={!isEditing}
                    borderColor={
                      isEditing
                        ? { base: "gray.300", _dark: "gray.500" }
                        : { base: "gray.200", _dark: "gray.600" }
                    }
                    bg={
                      isEditing
                        ? { base: "white", _dark: "inherit" }
                        : { base: "gray.50", _dark: "gray.700" }
                    }
                    size="lg"
                    readOnly={!isEditing}
                    cursor={isEditing ? "text" : "default"}
                  />
                </Box>
                <Box>
                  <Text
                    mb={2}
                    fontWeight="medium"
                    color={{ base: "#626C7A", _dark: "gray.300" }}
                  >
                    Last Name
                  </Text>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    isDisabled={!isEditing}
                    borderColor={
                      isEditing
                        ? { base: "gray.300", _dark: "gray.500" }
                        : { base: "gray.200", _dark: "gray.600" }
                    }
                    bg={
                      isEditing
                        ? { base: "white", _dark: "inherit" }
                        : { base: "gray.50", _dark: "gray.700" }
                    }
                    size="lg"
                    readOnly={!isEditing}
                    cursor={isEditing ? "text" : "default"}
                  />
                </Box>
                <Box>
                  <Text
                    mb={2}
                    fontWeight="medium"
                    color={{ base: "#626C7A", _dark: "gray.300" }}
                  >
                    Email
                  </Text>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    isDisabled={!isEditing}
                    borderColor={
                      isEditing
                        ? { base: "gray.300", _dark: "gray.500" }
                        : { base: "gray.200", _dark: "gray.600" }
                    }
                    bg={
                      isEditing
                        ? { base: "white", _dark: "inherit" }
                        : { base: "gray.50", _dark: "gray.700" }
                    }
                    size="lg"
                    readOnly={!isEditing}
                    cursor={isEditing ? "text" : "default"}
                  />
                </Box>
                <Box>
                  <Text
                    mb={2}
                    fontWeight="medium"
                    color={{ base: "#626C7A", _dark: "gray.300" }}
                  >
                    Phone Number
                  </Text>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    isDisabled={!isEditing}
                    borderColor={
                      isEditing
                        ? { base: "gray.300", _dark: "gray.500" }
                        : { base: "gray.200", _dark: "gray.600" }
                    }
                    bg={
                      isEditing
                        ? { base: "white", _dark: "inherit" }
                        : { base: "gray.50", _dark: "gray.700" }
                    }
                    size="lg"
                    readOnly={!isEditing}
                    cursor={isEditing ? "text" : "default"}
                  />
                </Box>
              </Grid>
            </Box>
          </Box>
        </Tabs.Content>

        <Tabs.Content value="Business Information">
          <Box
            border="1px solid"
            borderColor={{ base: "gray.200", _dark: "gray.600" }}
            borderRadius="md"
            p={{ base: 4, md: 8 }}
            bg={{ base: "white", _dark: "inherit" }}
            minH={{ base: "auto", md: "600px" }}
          >
            <Flex
              justify="space-between"
              align="center"
              mb={6}
              direction={{ base: "column", md: "row" }}
              gap={4}
            >
              <Box textAlign={{ base: "center", md: "left" }}>
                <Heading
                  as="h1"
                  size={{ base: "md", md: "lg" }}
                  mb={2}
                  color={{ base: "#626C7A", _dark: "gray.300" }}
                >
                  Business Information
                </Heading>
                <Text
                  color={{ base: "#626C7A", _dark: "gray.300" }}
                  fontSize={{ base: "sm", md: "md" }}
                >
                  This information will be displayed so be careful what you
                  share
                </Text>
              </Box>
              <Button
                leftIcon={
                  <FaUserEdit
                    color={{ base: "green.500", _dark: "green.300" }}
                  />
                }
                color={{ base: "green.500", _dark: "green.300" }}
                bg={{ base: "white", _dark: "inherit" }}
                border="1px solid"
                borderColor={{ base: "green.500", _dark: "green.300" }}
                _hover={{ bg: { base: "green.50", _dark: "green.900" } }}
                onClick={handleEditClick}
                size={{ base: "sm", md: "md" }}
                width={{ base: "100%", md: "auto" }}
              >
                {isEditing ? "Save Changes" : "Edit Profile"}
              </Button>
            </Flex>

            <Box
              border="1px solid"
              borderColor={{ base: "gray.200", _dark: "gray.600" }}
              borderRadius="md"
              p={{ base: 4, md: 8 }}
            >
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                gap={{ base: 4, md: 8 }}
              >
                <Box>
                  <Text
                    mb={2}
                    fontWeight="medium"
                    color={{ base: "#626C7A", _dark: "gray.300" }}
                  >
                    Business Name
                  </Text>
                  <Input
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    isDisabled={!isEditing}
                    borderColor={
                      isEditing
                        ? { base: "gray.300", _dark: "gray.500" }
                        : { base: "gray.200", _dark: "gray.600" }
                    }
                    bg={
                      isEditing
                        ? { base: "white", _dark: "inherit" }
                        : { base: "gray.50", _dark: "gray.700" }
                    }
                    size="lg"
                    readOnly={!isEditing}
                    cursor={isEditing ? "text" : "default"}
                  />
                </Box>
                <Box>
                  <Text
                    mb={2}
                    fontWeight="medium"
                    color={{ base: "#626C7A", _dark: "gray.300" }}
                  >
                    Address
                  </Text>
                  <Input
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    isDisabled={!isEditing}
                    borderColor={
                      isEditing
                        ? { base: "gray.300", _dark: "gray.500" }
                        : { base: "gray.200", _dark: "gray.600" }
                    }
                    bg={
                      isEditing
                        ? { base: "white", _dark: "inherit" }
                        : { base: "gray.50", _dark: "gray.700" }
                    }
                    size="lg"
                    readOnly={!isEditing}
                    cursor={isEditing ? "text" : "default"}
                  />
                </Box>
                <Box>
                  <Text
                    mb={2}
                    fontWeight="medium"
                    color={{ base: "#626C7A", _dark: "gray.300" }}
                  >
                    LGA
                  </Text>
                  <Input
                    name="lga"
                    value={formData.lga}
                    onChange={handleInputChange}
                    isDisabled={!isEditing}
                    borderColor={
                      isEditing
                        ? { base: "gray.300", _dark: "gray.500" }
                        : { base: "gray.200", _dark: "gray.600" }
                    }
                    bg={
                      isEditing
                        ? { base: "white", _dark: "inherit" }
                        : { base: "gray.50", _dark: "gray.700" }
                    }
                    size="lg"
                    readOnly={!isEditing}
                    cursor={isEditing ? "text" : "default"}
                  />
                </Box>
                <Box>
                  <Text
                    mb={2}
                    fontWeight="medium"
                    color={{ base: "#626C7A", _dark: "gray.300" }}
                  >
                    State
                  </Text>
                  <Input
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    isDisabled={!isEditing}
                    borderColor={
                      isEditing
                        ? { base: "gray.300", _dark: "gray.500" }
                        : { base: "gray.200", _dark: "gray.600" }
                    }
                    bg={
                      isEditing
                        ? { base: "white", _dark: "inherit" }
                        : { base: "gray.50", _dark: "gray.700" }
                    }
                    size="lg"
                    readOnly={!isEditing}
                    cursor={isEditing ? "text" : "default"}
                  />
                </Box>
              </Grid>
            </Box>
          </Box>
        </Tabs.Content>

        <Tabs.Content value="Notifications">
          <Box
            border="1px solid"
            borderColor={{ base: "gray.200", _dark: "gray.600" }}
            borderRadius="md"
            p={{ base: 4, md: 8 }}
            bg={{ base: "white", _dark: "inherit" }}
            minH={{ base: "auto", md: "600px" }}
          >
            <Flex
              justify="space-between"
              align="center"
              mb={6}
              direction={{ base: "column", md: "row" }}
              gap={4}
            >
              <Box textAlign={{ base: "center", md: "left" }}>
                <Heading
                  as="h1"
                  size={{ base: "md", md: "lg" }}
                  mb={2}
                  color={{ base: "#626C7A", _dark: "gray.300" }}
                >
                  Notifications
                </Heading>
                <Text
                  color={{ base: "#626C7A", _dark: "gray.300" }}
                  fontSize={{ base: "sm", md: "md" }}
                >
                  Get notified for everytime you login to your phone
                </Text>
              </Box>
            </Flex>

            <Box
              border="1px solid"
              borderColor={{ base: "gray.200", _dark: "gray.600" }}
              borderRadius="md"
              p={{ base: 4, md: 8 }}
              width="90%"
              mx="auto"
            >
              <Flex
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                align="center"
                gap={4}
              >
                <Flex
                  align="center"
                  gap={2}
                  width={{ base: "100%", md: "auto" }}
                >
                  <Text
                    fontWeight="medium"
                    color={{ base: "#626C7A", _dark: "gray.300" }}
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    Email Notifications
                  </Text>
                  <Switch.Root
                    colorPalette="green"
                    size={{ base: "md", md: "lg" }}
                    checked={emailNotifications}
                    onCheckedChange={() =>
                      setEmailNotifications(!emailNotifications)
                    }
                  >
                    <Switch.HiddenInput />
                    <Switch.Control />
                    <Switch.Label />
                  </Switch.Root>
                </Flex>
                <Flex
                  align="center"
                  gap={2}
                  width={{ base: "100%", md: "auto" }}
                >
                  <Text
                    fontWeight="medium"
                    color={{ base: "#626C7A", _dark: "gray.300" }}
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    Push Notifications
                  </Text>
                  <Switch.Root
                    colorPalette="green"
                    size={{ base: "md", md: "lg" }}
                    checked={pushNotifications}
                    onCheckedChange={() =>
                      setPushNotifications(!pushNotifications)
                    }
                  >
                    <Switch.HiddenInput />
                    <Switch.Control />
                    <Switch.Label />
                  </Switch.Root>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Tabs.Content>

        <Tabs.Content value="Terminal">
          <Box
            border="1px solid"
            borderColor={{ base: "gray.200", _dark: "gray.600" }}
            borderRadius="md"
            p={{ base: 4, md: 8 }}
            bg={{ base: "white", _dark: "inherit" }}
            minH={{ base: "auto", md: "600px" }}
          >
            <Flex
              justify="space-between"
              align="center"
              mb={6}
              direction={{ base: "column", md: "row" }}
              gap={4}
            >
              <Box textAlign={{ base: "center", md: "left" }}>
                <Heading
                  as="h1"
                  size={{ base: "md", md: "lg" }}
                  mb={2}
                  color={{ base: "#626C7A", _dark: "gray.300" }}
                >
                  Terminal
                </Heading>
                <Text
                  color={{ base: "#626C7A", _dark: "gray.300" }}
                  fontSize={{ base: "sm", md: "md" }}
                >
                  This is the terminal assigned to you
                </Text>
              </Box>
            </Flex>

            <Flex
              direction={{ base: "column", md: "row" }}
              gap={8}
              align="flex-start"
              justify="space-between"
            >
              <Box
                border="1px solid"
                borderColor={{ base: "gray.200", _dark: "gray.600" }}
                borderRadius="md"
                p={6}
                width={{ base: "90%", md: "60%" }}
              >
                <VStack spacing={4} align="stretch">
                  <Box>
                    <Text
                      mb={2}
                      fontWeight="medium"
                      color={{ base: "#626C7A", _dark: "gray.300" }}
                    >
                      Terminal ID
                    </Text>
                    <Text
                      p={3}
                      bg={{ base: "gray.50", _dark: "gray.700" }}
                      borderRadius="md"
                      fontSize="md"
                      color={{ base: "#626C7A", _dark: "gray.300" }}
                    >
                      KFN6E934O
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      mb={2}
                      fontWeight="medium"
                      color={{ base: "#626C7A", _dark: "gray.300" }}
                    >
                      Terminal Serial Number
                    </Text>
                    <Text
                      p={3}
                      bg={{ base: "gray.50", _dark: "gray.700" }}
                      borderRadius="md"
                      fontSize="md"
                      color={{ base: "#626C7A", _dark: "gray.300" }}
                    >
                      P2302NDPD5N6LSEHK
                    </Text>
                  </Box>
                  <Box pt={2}>
                    <Button
                      variant="link"
                      color={{ base: "green.500", _dark: "green.300" }}
                      p={0}
                      height="auto"
                      fontWeight="normal"
                      _hover={{
                        textDecoration: "none",
                        color: { base: "green.600", _dark: "green.200" },
                      }}
                    >
                      Request Change Of Terminal
                    </Button>
                  </Box>
                </VStack>
              </Box>

              <Box
                flex="0 0 auto"
                display={{ base: "none", md: "block" }}
                mt={4}
              >
                <img
                  src="/src/assets/posterminal.png"
                  alt="POS Terminal"
                  style={{
                    maxWidth: "200px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Flex>
          </Box>
        </Tabs.Content>
      </Box>

      {/* Remove Device Confirmation Dialog */}
      <Dialog.Root open={showRemoveConfirm} onOpenChange={setShowRemoveConfirm}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Remove Device</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Text>
                  Are you sure you want to remove {deviceToRemove?.deviceName}?
                  This will log you out from this device.
                </Text>
              </Dialog.Body>
              <Dialog.Footer>
                <Button
                  variant="outline"
                  mr={3}
                  onClick={() => setShowRemoveConfirm(false)}
                >
                  Cancel
                </Button>
                <Button colorPalette="red" onClick={confirmRemoveDevice}>
                  Remove
                </Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>

      {/* Notification Dialog */}
      <Dialog.Root open={showNotification} onOpenChange={setShowNotification}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>{notification.title}</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Text>{notification.description}</Text>
              </Dialog.Body>
              <Dialog.Footer>
                <Button
                  colorPalette={
                    notification.type === "success" ? "green" : "red"
                  }
                  onClick={() => setShowNotification(false)}
                >
                  OK
                </Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Tabs.Root>
  );
}

export default Settings;
